import { ActivityIndicator, Pressable, PressableProps, Text } from "react-native";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = PressableProps & {
  title: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
  className?: string;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-slate-950",
  secondary: "bg-white border border-slate-200",
  ghost: "bg-transparent",
  danger: "bg-red-600",
};

const textVariantClasses: Record<ButtonVariant, string> = {
  primary: "text-white",
  secondary: "text-slate-900",
  ghost: "text-slate-600",
  danger: "text-white",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-10 px-4",
  md: "h-12 px-5",
  lg: "h-14 px-6",
};

const textSizeClasses: Record<ButtonSize, string> = {
  sm: "text-sm",
  md: "text-[15px]",
  lg: "text-base",
};

export function Button({
  title,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  fullWidth = true,
  className = "",
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <Pressable
      disabled={isDisabled}
      className={`
        ${fullWidth ? "w-full" : ""}
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${isDisabled ? "opacity-50" : "active:opacity-80"}
        items-center justify-center rounded-xl
        ${className}
      `}
      {...props}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === "secondary" || variant === "ghost" ? "#0f172a" : "#ffffff"}
        />
      ) : (
        <Text
          className={`
            font-semibold
            ${textSizeClasses[size]}
            ${textVariantClasses[variant]}
          `}
        >
          {title}
        </Text>
      )}
    </Pressable>
  );
}