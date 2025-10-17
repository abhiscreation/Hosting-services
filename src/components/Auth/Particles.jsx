import React, { useMemo } from "react";
import { loadFull } from "tsparticles";
import { Particles } from "@tsparticles/react";

const ParticlesBackdrop = () => {
  const options = useMemo(() => ({
    background: { color: { value: "#0a0f1d" } },
    fpsLimit: 60,
    detectRetina: true,
    particles: {
      number: { value: 60, density: { enable: true, area: 900 } },
      color: { value: ["#00e5ff", "#7b61ff", "#ff00ff"] },
      links: { enable: true, distance: 130, color: "#00e5ff", opacity: 0.25, width: 1 },
      move: { enable: true, speed: 1.2, outModes: "out" },
      opacity: { value: 0.35 },
      size: { value: { min: 1, max: 3 } },
      shape: { type: "circle" }
    },
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" }, onClick: { enable: true, mode: "push" } },
      modes: { repulse: { distance: 120 }, push: { quantity: 3 } }
    }
  }), []);

  const init = async (engine) => { await loadFull(engine); };

  return (
    <Particles id="fs-auth-particles" init={init} options={options} />
  );
};

export default ParticlesBackdrop;
