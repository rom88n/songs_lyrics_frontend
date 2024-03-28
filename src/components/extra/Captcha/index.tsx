import React, { useRef, useEffect, FC } from 'react';

const Captcha: FC<{ text: string }> = ({ text }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current || null as HTMLCanvasElement | null;

    if (canvas) {
      const context = canvas.getContext('2d');

      if (context) {
        // Clear the canvas
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Set properties for the text
        context.font = '48px serif';
        context.textAlign = 'center';
        context.textBaseline = 'middle';

        // Optional: Draw some random lines or dots to make the CAPTCHA harder to read for bots

        // Draw the text
        context.fillText(text, canvas.width / 2, canvas.height / 2);
      }
    }
  }, [text]);

  return (
    <canvas ref={canvasRef} width={200} height={100} />
  );
};

export default Captcha;
