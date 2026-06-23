const Button = ({ children, href, variant = 'primary', className = '', onClick }) => {
  const baseClasses = 'inline-block font-semibold rounded-lg transition duration-300 text-center';
  
  const variants = {
    primary: 'bg-[#FE5538] hover:bg-[#e24b31] text-white',
    secondary: 'bg-gray-800 hover:bg-gray-700 text-white',
  };

  const sizeClasses = 'px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base md:text-lg';

  if (href) {
    return (
      <a 
        href={href} 
        className={`${baseClasses} ${variants[variant]} ${sizeClasses} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${sizeClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
