import React from "react";
import {motion} from "framer-motion";

const projects = [
    {
        id: 1,
        title: "Частный дом",
        description: "60 м², выполнено с армированием и отделкой.",
        images: [
            "/portfolio/example_1(1).jpeg",
            "/portfolio/example_1.jpeg",
        ],
    },
];

export default function Portfolio() {
    const [lightbox, setLightbox] = React.useState({
        isOpen: false,
        project: null,
        index: 0,
    });

    React.useEffect(() => {
    if (lightbox.isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox.isOpen]);
    
    return (
        <section id="portfolio" className="relative py-20 px-4 bg-black bg-opacity-60 z-0">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-4xl font-extrabold text-center mb-12 text-white drop-shadow-lg"
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                >
                    Наши работы
                </motion.h2>

                <div className="grid gap-8 md:grid-cols-3">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            setLightbox={setLightbox}
                        />
                    ))}
                </div>
            </div>

            {lightbox.isOpen && lightbox.project && (
                <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
                    <div className="relative max-w-5xl w-full px-4">
                        <button
                            type="button"
                            className="absolute top-4 right-4 text-white text-2xl"
                            onClick={() =>
                                setLightbox({isOpen: false, project: null, index: 0})
                            }
                        >
                            ✕
                        </button>

                        <img
                            src={lightbox.project.images[lightbox.index]}
                            alt={lightbox.project.title}
                            className="w-full max-h-[80vh] object-contain rounded-lg"
                        />

                        <div
                            className="absolute inset-y-0 left-2 right-2 flex items-center justify-between pointer-events-none">
                            <button
                                type="button"
                                className="pointer-events-auto text-white text-3xl px-3"
                                onClick={() =>
                                    setLightbox((prev) => ({
                                        ...prev,
                                        index:
                                            (prev.index - 1 + prev.project.images.length) %
                                            prev.project.images.length,
                                    }))
                                }
                            >
                                ‹
                            </button>
                            <button
                                type="button"
                                className="pointer-events-auto text-white text-3xl px-3"
                                onClick={() =>
                                    setLightbox((prev) => ({
                                        ...prev,
                                        index:
                                            (prev.index + 1) % prev.project.images.length,
                                    }))
                                }
                            >
                                ›
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

function ProjectCard({project, index, setLightbox}) {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const activeImage = project.images[activeIndex] || project.images[0];

    return (
        <motion.div
            className="rounded-xl shadow-lg overflow-hidden flex flex-col"
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{delay: index * 0.1}}
        >
            <button
                type="button"
                onClick={() =>
                    setLightbox({
                        isOpen: true,
                        project,
                        index: activeIndex,
                    })
                }
                className="relative w-full h-56 bg-gray-800 overflow-hidden"
            >
                <img
                    src={activeImage}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
            </button>

            <div
                className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 text-center">
                <h3 className="text-xl font-semibold mb-2 text-white">
                    {project.title}
                </h3>
                <p className="text-gray-200 mb-4">{project.description}</p>

                {project.images.length > 1 && (
                    <div className="mt-auto flex gap-2">
                        {project.images.map((img, idx) => (
                            <button
                                key={idx}
                                type="button"
                                onClick={() => setActiveIndex(idx)}
                                className={`w-12 h-12 rounded overflow-hidden border ${
                                    idx === activeIndex
                                        ? "border-yellow-400"
                                        : "border-transparent"
                                }`}
                            >
                                <img
                                    src={img}
                                    alt={`${project.title} фото ${idx + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
}
