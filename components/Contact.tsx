import Link from "next/link";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <p className="font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide">
        Contactez-nous
      </p>
      <h2 className="font-titleFont text-5xl font-semibold"></h2>
      <p className="max-w-[600px] text-center text-textDark">
      Nous sommes ravis d'établir le contact avec vous ! Si vous avez des questions, des commentaires ou si vous souhaitez discuter de collaborations potentielles, n'hésitez pas à nous contacter. Notre équipe d'experts est là pour répondre à vos demandes.
      </p>

      <a href="mailto:Mohamed@gmail.com">
        <button className="w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300">
        Merci de nous avoir contactés !

        </button>
      </a>
    </section>
  );
};

export default Contact;
