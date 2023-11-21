import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
const Google = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
      Conseil Stratégique de 
        <span className="text-textGreen tracking-wide">l IA</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jan 2022 - Dec 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Collaboration avec des équipes interdisciplinaires pour évaluer et atténuer les risques éthiques associés à des projets spécifiques d IA.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Élaboration de politiques internes en matière d éthique de l IA et suivi de leur mise en œuvre.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Participation active à des initiatives externes visant à façonner les normes éthiques de l industrie.
        </li>
      </ul>
    </motion.div>
  );
};

export default Google;
