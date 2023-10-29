import { CardPromociones } from ".";

export default {
  title: "Components/CardPromociones",
  component: CardPromociones,
  argTypes: {
    property1: {
      options: ["default", "variant-5", "variant-2", "variant-3", "variant-4"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "default",
    imagen: "/img/imagen-3-2.png",
  },
};
