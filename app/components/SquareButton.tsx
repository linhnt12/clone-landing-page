interface SquareButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function SquareButton({ href, children, className = "" }: SquareButtonProps) {
  return (
    <a
      href={href}
      className={`
        bg-blue-500
        text-white 
        px-6 
        py-2 
        rounded-md 
        border
        border-blue-500
        font-semibold
        hover:bg-white
        hover:text-blue-500
        hover:border-blue-500
        transition-colors
        ${className}
      `}
    >
      {children}
    </a>
  );
}
