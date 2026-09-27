import { useContext, useEffect, useLayoutEffect, useRef } from "react";
import { GameContext } from "context";
import { getLevel } from "utils";
import { Wrapper, Canvas } from "./styles";
import { lerpColor, roundRect } from "./canvasUtils";

const GRID_SIZE = 30;
const BG_COLOR = "#0b1220";
const GRID_LINE_COLOR = "rgba(255, 255, 255, 0.045)";
const BLOCK_COLOR = "#3b4a63";
const APPLE_COLOR = "#ff4d6d";

function draw(ctx, size, state) {
  const cell = size / GRID_SIZE;
  const levelColor = getLevel(state.level).color;

  ctx.clearRect(0, 0, size, size);
  ctx.fillStyle = BG_COLOR;
  ctx.fillRect(0, 0, size, size);

  ctx.strokeStyle = GRID_LINE_COLOR;
  ctx.lineWidth = 1;
  for (let i = 1; i < GRID_SIZE; i++) {
    ctx.beginPath();
    ctx.moveTo(i * cell, 0);
    ctx.lineTo(i * cell, size);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, i * cell);
    ctx.lineTo(size, i * cell);
    ctx.stroke();
  }

  ctx.fillStyle = BLOCK_COLOR;
  state.block.forEach(([r, c]) => {
    roundRect(ctx, c * cell + 1, r * cell + 1, cell - 2, cell - 2, 3);
    ctx.fill();
  });

  const snakeLen = state.snake.length;
  state.snake.forEach(([r, c], idx) => {
    const isHead = idx === snakeLen - 1;
    const t = snakeLen <= 1 ? 1 : idx / (snakeLen - 1);
    ctx.fillStyle = isHead ? levelColor : lerpColor("#0d3f26", levelColor, t);
    const pad = isHead ? cell * 0.06 : cell * 0.12;
    roundRect(
      ctx,
      c * cell + pad,
      r * cell + pad,
      cell - pad * 2,
      cell - pad * 2,
      isHead ? cell * 0.4 : cell * 0.3
    );
    ctx.fill();

    if (isHead) {
      ctx.fillStyle = "#0b1220";
      const eyeSize = Math.max(cell * 0.09, 1.5);
      const [dr, dc] = state.snake.length > 1 ? [r - state.snake[idx - 1][0], c - state.snake[idx - 1][1]] : [0, 1];
      const cx = c * cell + cell / 2;
      const cy = r * cell + cell / 2;
      const perpX = -dc * cell * 0.22;
      const perpY = -dr * cell * 0.22;
      const forwardX = dc * cell * 0.18;
      const forwardY = dr * cell * 0.18;
      ctx.beginPath();
      ctx.arc(cx + perpX + forwardX, cy + perpY + forwardY, eyeSize, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(cx - perpX + forwardX, cy - perpY + forwardY, eyeSize, 0, Math.PI * 2);
      ctx.fill();
    }
  });

  if (state.apple) {
    const [ar, ac] = state.apple;
    const cx = ac * cell + cell / 2;
    const cy = ar * cell + cell / 2;
    const radius = cell * 0.33;

    ctx.save();
    ctx.shadowColor = APPLE_COLOR;
    ctx.shadowBlur = cell * 0.6;
    ctx.fillStyle = APPLE_COLOR;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    ctx.fillStyle = "rgba(255, 255, 255, 0.55)";
    ctx.beginPath();
    ctx.arc(cx - radius * 0.35, cy - radius * 0.35, radius * 0.28, 0, Math.PI * 2);
    ctx.fill();
  }
}

const BoardComponent = ({ sm }) => {
  const { state } = useContext(GameContext);
  const wrapperRef = useRef(null);
  const canvasRef = useRef(null);
  const sizeRef = useRef(0);

  const render = () => {
    const canvas = canvasRef.current;
    if (!canvas || !sizeRef.current) return;
    const ctx = canvas.getContext("2d");
    draw(ctx, sizeRef.current, state);
  };

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    const canvas = canvasRef.current;
    if (!wrapper || !canvas) return;

    const resize = () => {
      const size = Math.floor(Math.min(wrapper.clientWidth, wrapper.clientHeight));
      if (!size) return;
      const dpr = window.devicePixelRatio || 1;
      sizeRef.current = size;
      canvas.width = size * dpr;
      canvas.height = size * dpr;
      canvas.style.width = `${size}px`;
      canvas.style.height = `${size}px`;
      const ctx = canvas.getContext("2d");
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      render();
    };

    resize();
    let frame = null;
    const observer = new ResizeObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(resize);
    });
    observer.observe(wrapper);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    render();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.snake, state.apple, state.block, state.level]);

  return (
    <Wrapper ref={wrapperRef} sm={sm}>
      <Canvas ref={canvasRef} />
    </Wrapper>
  );
};

export default BoardComponent;
