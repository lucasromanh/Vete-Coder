import { FabWhatsapp } from ".";

export default {
  title: "Components/FabWhatsapp",
  component: FabWhatsapp,
  argTypes: {
    property1: {
      options: ["variant-2", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "variant-2",
    className: {},
    icBaselineWhatsapp: "/img/ic-baseline-whatsapp-1.svg",
  },
};
