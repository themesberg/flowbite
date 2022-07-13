const classNames = ["font-semibold"];

const getColorClassNames = (color) => {
  switch (color) {
    case "default":
      return ["bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800"];
    case "dark":
      return ["bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"];
    case "red":
      return ["bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-9000"];
    case "green":
      return [
        "bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900",
      ];
    case "yellow":
      return [
        "bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900",
      ];
    case "indigo":
      return [
        "bg-indigo-100 text-indigo-800 dark:bg-indigo-200 dark:text-indigo-900",
      ];
    case "purple":
      return [
        "bg-purple-100 text-purple-800 dark:bg-purple-200 dark:text-purple-900",
      ];
    case "pink":
      return ["bg-pink-100 text-pink-800 dark:bg-pink-200 dark:text-pink-900"];
  }
};

const getLargerClassNames = (larger) => {
  return larger ? ["text-sm font-medium"] : ["text-xs"];
};

const getIconClassNames = (icon) => {
  return icon ? ["inline-flex items-center"] : [];
};

const getOnlyIconClassNames = (onlyIcon) => {
  return onlyIcon
    ? ["inline-flex items-center p-1 text-sm font-semibold text rounded-full "]
    : ["rounded px-2.5 py-0.5"];
};

export const createBadge = ({
  color = "default",
  label = "Default",
  larger = false,
  href = null,
  displayMode,
}) => {
  const badge = document.createElement(href ? "a" : "span");

  if (href) {
    badge.href = href;
  }

  if (displayMode === "icon" || displayMode === "icon + text") {
    badge.innerHTML = `<svg class="w-3 h-3" mr-1 fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>`;
  }

  if (displayMode === "text" || displayMode === "icon + text") {
    badge.append(label);
  }

  const onlyIcon = displayMode == "icon";
  const icon = displayMode != "text";

  badge.className = [
    ...classNames,
    ...getColorClassNames(color),
    ...getLargerClassNames(larger),
    ...getIconClassNames(icon),
    ...getOnlyIconClassNames(onlyIcon),
  ].join(" ");
  return badge;
};
