const classNames = [
  'text-xs',
  'font-semibold',
  'px-2.5',
  'py-0.5',
  'rounded',
]

const getStyleClassNames = (style) => {
  switch (style) {
    case 'default':
      return ['bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800'];
    case 'dark':
      return ['bg-gray-100 text-gray-800 text-xs dark:bg-gray-700 dark:text-gray-300'];
    case 'red':
      return ['bg-red-100 text-red-800 text-xs dark:bg-red-200 dark:text-red-9000'];
    case 'green':
      return ['bg-green-100 text-green-800 text-xs dark:bg-green-200 dark:text-green-900'];
    case 'yellow':
      return ['bg-yellow-100 text-yellow-800 text-xs dark:bg-yellow-200 dark:text-yellow-900'];
    case 'indigo':
      return ['bg-indigo-100 text-indigo-800 text-xs dark:bg-indigo-200 dark:text-indigo-900'];
    case 'purple':
      return ['bg-purple-100 text-purple-800 text-xs dark:bg-purple-200 dark:text-purple-900'];
    case 'pink':
      return ['bg-pink-100 text-pink-800 text-xs dark:bg-pink-200 dark:text-pink-900'];
  }
}

export const createBadge = ({
  style = 'default',
  label = 'Default'
}) => {
  const badge = document.createElement('badge');
  badge.type = 'badge';
  badge.textContent = label;

  badge.className = [...classNames, ...getStyleClassNames(style)].join(' ');

  return badge;
};
