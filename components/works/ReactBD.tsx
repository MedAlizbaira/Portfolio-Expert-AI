import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const ReactBD = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
      Audit Éthique de
        <span className="text-textGreen tracking-wide"> l IA</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jan 2023 - present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Conception et mise en œuvre d un cadre éthique pour les systèmes d IA, intégrant des principes de transparence, d équité et de responsabilité.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Conseil stratégique auprès des équipes de développement pour garantir la conformité aux normes éthiques et légales.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Formation du personnel sur les enjeux éthiques liés à l IA et facilitation de discussions pour promouvoir une culture axée sur la responsabilité sociale.
        </li>
      </ul>
    </motion.div>
  );
};

export default ReactBD;
