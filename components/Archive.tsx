import { useState } from "react";
import ArchiveCard from "./ArchiveCard";
import { motion } from "framer-motion";

const Archive = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
        Formation et Sensibilisation 
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          Consulter
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchiveCard
          title="Stratégie de Formation "
          des="Décrivez la stratégie globale que vous avez élaborée pour concevoir des programmes de formation en éthique de l'IA. Expliquez comment vous avez adapté les contenus pour répondre aux besoins spécifiques des professionnels, favorisant ainsi une compréhension approfondie des enjeux éthiques"
          listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
          link="https://www.educareenglishlearningacademy.com/"
        />
        <ArchiveCard
          title="Contenu Pédagogique"
          des="Expliquez la méthodologie que vous avez adoptée pour dispenser ces formations. Mettez en avant les approches interactives, les études de cas en groupe, les discussions dirigées, ou toute autre méthode que vous avez trouvée efficace pour engager les participants"
          listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
          link="https://www.mohmmad.com/"
        />
        <ArchiveCard
          title="Rétroaction et Adaptation"
          des="Parlez des retours que vous avez reçus de la part des participants. Comment avez-vous utilisé cette rétroaction pour ajuster et améliorer vos programmes de formation ? Montrez comment votre approche est dynamique et sensible aux besoins en constante évolution du domaine de l'éthique de l'IA."
          listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
          link="https://reactbd.com/"
        />
        <ArchiveCard
          title="Promotion de la Culture de Responsabilité Sociale "
          des="Discutez de la manière dont vos programmes de formation ont contribué à instaurer une culture d'éthique et de responsabilité sociale au sein des organisations. Incluez des témoignages ou des exemples concrets illustrant le changement d'attitude ou de comportement des participants."
          listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
          link="https://amazonclone.reactbd.com/"
        />
        <ArchiveCard
          title="Promotion de la Culture de Responsabilité Sociale"
          des="Présentez des exemples spécifiques de discussions que vous avez facilitées lors de ces formations. Comment avez-vous encouragé la participation active, stimulé la réflexion critique et favorisé un dialogue ouvert sur les défis éthiques de l'IA ? Partagez des anecdotes illustrant votre capacité à créer un environnement propice à l'apprentissage et à la sensibilisation."
          listItem={["Nextjs", "Tailwind CSS", "next-router"]}
          link="https://jsondata.reactbd.com/"
        />
        <ArchiveCard
          title="Interventions Facilitatrices"
          des="Présentez des exemples spécifiques de discussions que vous avez facilitées lors de ces formations. Comment avez-vous encouragé la participation active, stimulé la réflexion critique et favorisé un dialogue ouvert sur les défis éthiques de l'IA ? Partagez des anecdotes illustrant votre capacité à créer un environnement propice à l'apprentissage et à la sensibilisation."
          listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
          link="https://portfolioone.reactbd.com/"
        />

       
      </div>
      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Archive;
