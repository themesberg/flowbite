const classNames = [
  'font-medium',
  'rounded-lg',
  'focus:ring-4',
  'focus:outline-none'
]

const getStyleClassNames = (style) => {
  switch (style) {
    case 'default':
      return ['bg-blue-700', 'text-white', 'hover:bg-blue-800', 'focus:ring-blue-300'];
    case 'alternative':
      return ['bg-white', 'border', 'border-gray-200', 'text-gray-900', 'hover:bg-gray-100', 'hover:text-blue-700', 'focus:ring-gray-200'];
    case 'dark':
      return ['bg-gray-800', 'text-white', 'hover:bg-gray-900', 'focus:ring-gray-300'];
    case 'light':
      return ['bg-white', 'border', 'border-gray-300', 'hover:bg-gray-100', 'focus:ring-gray-200'];
    case 'success':
      return ['bg-green-700', 'text-white', 'focus:ring-green-300'];
    case 'danger':
      return ['bg-red-700', 'text-white', 'focus:ring-red-300'];
    case 'warning':
      return ['bg-yellow-400', 'text-white', 'focus:ring-yellow-300'];
  }
}

const getSizeClassNames = (size) => {
  switch (size) {
    case 'xs':
      return ['px-3', 'py-2', 'text-xs'];
    case 'sm':
      return ['px-3', 'py-2', 'text-sm'];
    case 'md':
      return ['px-5', 'py-2.5', 'text-sm'];
    case 'lg':
      return ['px-5', 'py-3', 'text-base'];
    case 'xl':
      return ['px-6', 'py-3.5', 'text-base'];
  }
}

const createButton = ({
  style = 'default',
  size = 'md',
  label = 'Default'
}) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.textContent = label;

  btn.className = [...classNames, ...getSizeClassNames(size), ...getStyleClassNames(style)].join(' ');

  return btn;
};

module.exports = { createButton }