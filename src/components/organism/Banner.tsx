"use client";
import { useRef, useEffect, ReactElement } from "react";

export default function Banner() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (ctx) {
        // 2 rectangular
        // ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        // ctx.fillStyle = "green";
        // ctx.fillRect(24, 24, 100, 50);
        // ctx.strokeRect(32, 32, 100, 50);
        // // Filled triangle
        // ctx.beginPath();
        // ctx.moveTo(25, 25);
        // ctx.lineTo(105, 25);
        // ctx.lineTo(25, 105);
        // ctx.fillStyle = "yellow";
        // ctx.fill();
        // // Stroked triangle
        // ctx.beginPath();
        // ctx.moveTo(125, 125);
        // ctx.lineTo(125, 45);
        // ctx.lineTo(45, 125);
        // ctx.closePath();
        // ctx.stroke();
        // // smily face emoji
        // ctx.beginPath();
        // ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
        // ctx.moveTo(110, 75);
        // ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
        // ctx.moveTo(65, 65);
        // ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
        // ctx.moveTo(95, 65);
        // ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
        // ctx.stroke();
        // colors
        // for (let i = 0; i < 6; i++) {
        //   for (let j = 0; j < 6; j++) {
        //     ctx.fillStyle = `rgb(${Math.floor(255 - 42.5 * i)} ${Math.floor(
        //       255 - 42.5 * j
        //     )} 0)`;
        //     ctx.fillRect(j * 25, i * 25, 25, 25);
        //   }
        // }
        // Create radial gradient
        let gradient = ctx.createRadialGradient(
          canvas.width / 2,
          canvas.height / 2,
          100,
          canvas.width / 2,
          canvas.height / 2,
          canvas.width / 2
        );

        gradient.addColorStop(0, "red");
        gradient.addColorStop(0.5, "cyan");
        gradient.addColorStop(1, "magenta");

        // Symbol class
        class Symbol {
          characters: string;
          x: number;
          y: number;
          fontSize: number;
          canvasHeight: number;
          text: string;

          constructor(
            x: number,
            y: number,
            fontSize: number,
            canvasHeight: number
          ) {
            this.characters = "0123456789";
            this.x = x;
            this.y = y;
            this.fontSize = fontSize;
            this.canvasHeight = canvasHeight;
            this.text = "";
          }

          draw(context: CanvasRenderingContext2D) {
            this.text = this.characters.charAt(
              Math.floor(Math.random() * this.characters.length)
            );
            context.fillText(
              this.text,
              this.x * this.fontSize,
              this.y * this.fontSize
            );
            if (
              this.y * this.fontSize > this.canvasHeight &&
              Math.random() > 0.98
            ) {
              this.y = 0;
            } else {
              this.y += 1;
            }
          }
        }

        // Effect class
        class Effect {
          canvasWidth: number;
          canvasHeight: number;
          fontSize: number;
          columns: number;
          symbols: Symbol[];

          constructor(canvasWidth: number, canvasHeight: number) {
            this.canvasWidth = canvasWidth;
            this.canvasHeight = canvasHeight;
            this.fontSize = 32;
            this.columns = Math.floor(this.canvasWidth / this.fontSize);
            this.symbols = [];
            this.initialize();
          }

          initialize() {
            for (let i = 0; i < this.columns; i++) {
              this.symbols[i] = new Symbol(
                i,
                0,
                this.fontSize,
                this.canvasHeight
              );
            }
          }

          resize(width: number, height: number) {
            this.canvasWidth = width;
            this.canvasHeight = height;
            this.columns = Math.floor(this.canvasWidth / this.fontSize);
            this.symbols = [];
            this.initialize();
          }
        }

        const effect = new Effect(canvas.width, canvas.height);
        let lastTime = 0;
        const fps = 30;
        const nextFrame = 1000 / fps;
        let timer = 0;

        function animate(timeStamp: number) {
          const deltaTime = timeStamp - lastTime;
          lastTime = timeStamp;

          if (ctx && canvas && timer > nextFrame) {
            ctx.fillStyle = "rgba(0,0,0, 0.05)";
            ctx.textAlign = "center";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = gradient;
            ctx.font = `${effect.fontSize}px monospace`;
            effect.symbols.forEach((symbol) => symbol.draw(ctx));

            timer = 0;
          } else {
            timer += deltaTime;
          }

          requestAnimationFrame(animate);
        }
        animate(0);

        window.addEventListener("resize", () => {
          if (canvas && ctx) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            effect.resize(canvas.width, canvas.height);

            gradient = ctx.createRadialGradient(
              canvas.width / 2,
              canvas.height / 2,
              100,
              canvas.width / 2,
              canvas.height / 2,
              canvas.width / 2
            );

            gradient.addColorStop(0, "red");
            gradient.addColorStop(0.5, "cyan");
            gradient.addColorStop(1, "magenta");
          }
        });
      }
    }
  }, []);
  return (
    <section>
      <canvas className="bg-red-300 h-[500px] w-full" ref={canvasRef}></canvas>
    </section>
  );
}
// <section
//   className="sm:h-[300px] h-[200px] bg-gray-200 flex items-center justify-center text-gray-900 relative "
//   id="main"
// >
//   <h2 className="flex justify-center items-center text-center md:text-6xl text-4xl font-bold absolute top-0 right-0 h-full w-full bg-[#33333324] backdrop-blur-sm z-10 bg-art">
//     قائمة البطاقات العامة
//   </h2>

// </section>
