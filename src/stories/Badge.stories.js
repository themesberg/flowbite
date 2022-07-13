import { createBadge } from "./Badge";

export default {
  title: "Example/Badge",
  argTypes: {
    label: {
      control: {
        type: "text",
      },
      defaultValue: {
        summary: "Default",
      },
    },
    color: {
      control: "select",
      options: [
        "default",
        "dark",
        "red",
        "green",
        "yellow",
        "indigo",
        "purple",
        "pink",
      ],
    },
    larger: {
      control: "boolean",
      description:
        "Use the `text-sm` to create a larger variant of the badges.",
      defaultValue: {
        summary: "false",
      },
    },
    href: {
      description: "Use badges as anchor `a` element to link to another page",
      control: {
        type: "text",
      },
    },
    displayMode: {
      control: "radio",
      options: ["text", "icon", "icon + text"],
      description: "Use `SVG` icons inside the badge elements",
      defaultValue: {
        summary: "Default",
      },
    },
  },
};

const Template = ({ label, ...args }) => {
  return createBadge({ label, ...args });
};

export const Default = Template.bind({});
Default.storyName = "Default";
Default.args = {
  color: "default",
  label: "Default",
  displayMode: "text",
};

export const Larger = Template.bind({});
Larger.storyName = "Larger";
Larger.args = {
  label: "Default",
  larger: true,
  displayMode: "text",
};

export const WithLink = Template.bind({});
WithLink.storyName = "WithLink";
WithLink.args = {
  label: "Default",
  larger: false,
  displayMode: "text",
  href: "http://flowbite.com",
};

export const WithIcon = Template.bind({});
WithIcon.storyName = "WithIcon";
WithIcon.args = {
  label: "default",
  displayMode: "icon + text",
};

export const OnlyIcon = Template.bind({});
OnlyIcon.storyName = "OnlyIcon";
OnlyIcon.args = {
  label: "default",
  displayMode: "icon",
};
