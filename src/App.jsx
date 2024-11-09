import { useEffect, useRef, useState } from "react";

import Layout from "./layout";
import { HeroParallax } from "./components/hero-parallax";
import { WavyBackground } from "./components/wavy-background";
import ContactForm from "./components/ContactForm";
import "./App.css";

import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

import analytica1 from "@/assets/analytica1.png"
import analytica2 from "@/assets/analytica2.png"
import analytica3 from "@/assets/analytica3.png"
import analytica4 from "@/assets/analytica4.png"
import analytica5 from "@/assets/analytica5.png"
import { BentoGridTable } from "./components/BentoGrid";
import { BackgroundGradient } from "./components/BgGradient";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";

import sol1 from "@/assets/sol1.png";
import sol2 from "@/assets/sol2.png";
import sol3 from "@/assets/sol3.png";
import sol4 from "@/assets/sol4.png";

function App() {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { triggerOnce: true });

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { triggerOnce: true });

  const ref3 = useRef(null);
  const isInView3 = useInView(ref3, { triggerOnce: true });

  const ref4 = useRef(null);
  const isInView4 = useInView(ref4, { triggerOnce: true });

  const products = [
    {
      title: "Saif's Portfolio",
      thumbnail: analytica1,
      link: "#"
    },
    {
      title: "Analytica Data",
      thumbnail: analytica2,
      link: "#"
    },
    {
      title: "OpenAI's Website",
      thumbnail: analytica3,
      link: "#"
    },
    {
      title: "Dubai Google Search",
      thumbnail: analytica4,
      link: "#"
    },
    {
      title: "Analytica",
      thumbnail: analytica5,
      link: "#"
    }
  ]
  const solutions = [
    {
      ref: ref1,
      isInView: isInView1,
      title: "Custom Software Development",
      src: sol1,
      desc: "Tailored software solutions to meet your unique business needs, ensuring scalability, performance, and seamless integration."
    },
    {
      ref: ref2,
      isInView: isInView2,
      title: "AI & Machine Learning",
      src: sol2,
      desc: "Empower your business with data-driven insights, predictive analytics, and intelligent automation through cutting-edge AI and ML technologies."
    },
    {
      ref: ref3,
      isInView: isInView3,
      title: "Cloud Integration",
      src: sol3,
      desc: "Seamless migration and integration with cloud platforms to enhance collaboration, security, and efficiency across your operations."
    },
    {
      ref: ref4,
      isInView: isInView4,
      title: "IoT Solutions",
      src: sol4,
      desc: "Innovative IoT solutions for smarter connectivity and real-time monitoring, transforming how you interact with devices and data."
    }
  ]
  const [items, setItems] = useState([
    {
      title: "...",
      description: "...",
      header: <Skeleton />,
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "...",
      description: "...",
      header: <Skeleton />,
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "...",
      description: "...",
      header: <Skeleton />,
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "...",
      description:
        "...",
      header: <Skeleton />,
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "...",
      description: "...",
      header: <Skeleton />,
      icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "...",
      description: "...",
      header: <Skeleton />,
      icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "...",
      description: "...",
      header: <Skeleton />,
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
  ]);

  async function getData() {
    fetch('https://dummyjson.com/products?limit=7', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }, 
    }).then(res => res.text()).then((res)=>{
      res = JSON.parse(res)
      if (res?.products) {
        let newArr = [];
        let arr = res?.products?.map((prod, id) => {
          newArr.push({
            title: prod?.title,
            description: prod?.description,
            header: <Skeleton img={prod?.thumbnail} />,
          })
        });
        setItems(newArr)
      }
    })
  }

  useEffect(()=>{
    getData();
  })

  return (
    <Layout>
      <HeroParallax products={[...products, ...products, ...products]} />
      <br />
      <div id="services" className="max-w-7xl max-lg:px-12 relative mx-auto py-20 px-4 w-full  left-0 top-0">
        <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
          Solutions
        </h1>
        <div className="text-base md:text-xl my-8 dark:text-neutral-200">
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions?.map((sol, index) => (
            <motion.div className="flex justify-center h-fit"
              ref={sol?.ref}
              initial={{ opacity: 0, y: 50 }}
              animate={sol?.isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <BackgroundGradient key={index} className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-background">
                <img src={sol?.src} alt="Solution img" className="w-full h-auto aspect-video object-contain" />
                <br />
                <p className="text-base sm:text-xl text-primary mt-4 mb-2">
                  {sol?.title}
                </p>
        
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {sol?.desc}
                </p>

                <button className="rounded-full pl-4 pr-1 py-1 text-primary flex items-center space-x-1 bg-secondary mt-4 text-xs font-bold">
                  <span>Learn More </span>
                  <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-primary">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </button>
              </BackgroundGradient>
            </motion.div>
          ))}
        </div>
        </div>
      </div>
      <div id="insights" className="max-w-7xl relative mx-auto py-20 px-4 w-full  left-0 top-0">
        <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
          Insights
        </h1>
        <div className="text-base md:text-xl my-8 dark:text-neutral-200">
          <BentoGridTable items={items} />
        </div>
      </div>
      {/* Contact Section */}
      <WavyBackground>
        <ContactForm />
      </WavyBackground>
    </Layout>
  );
}

export default App;

const Skeleton = ({img}) => {
  if (!img) {
    return <div
      className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl animate-pulse bg-gradient-to-br from-neutral-900 to-neutral-800"></div>
  }
  return <img src={img} className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover" alt="News Image" />
}