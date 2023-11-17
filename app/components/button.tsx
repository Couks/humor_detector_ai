import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

import { CheckCircle, RotateCw, Trash2, Upload, XCircle } from "lucide-react";

const button = tv({
  base: "flex items-center justify-center w-full text-white font-sans font-semibold text-xl rounded-lg focus:outline-none",
  variants: {
    normal: {
      true: "bg-purple-500 hover:bg-purple-700 focus:ring-4 focus:ring-purple-400",
    },
    success: {
      true: "bg-emerald-600 hover:bg-emerald-800 focus:ring-emerald-400 shadow-md ",
    },
    upload: {
      true: "bg-emerald-500 hover:bg-emerald-700 focus:ring-emerald-400 shadow-md ",
    },
    error: {
      true: "bg-orange-500 hover:bg-orange-700 focus:ring-orange-400 shadow-md ",
    },
    remove: {
      true: "bg-red-500 hover:bg-red-700 focus:ring-red-400 shadow-md ",
    },
    loading: {
      true: "bg-zinc-500 hover:bg-zinc-700 focus:ring-zinc-400 shadow-md ",
    },
    size: {
      default: "w-full h-10 px-6 py-2",
      lg: "h-14 px-10 py-6",
    },
  },
  defaultVariants: {
    size: "default",
    success: false,
    error: false,
    remove: false,
    update: false,
    normal: true,
    loading: false,
  },
});

export type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof button>;

export function Button({
  success,
  error,
  upload,
  remove,
  normal,
  loading,
  size,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={button({
        success,
        error,
        upload,
        remove,
        normal,
        loading,
        size,
        className,
      })}
      {...props}
    >
      {success && (
        <>
          <CheckCircle size={24} strokeWidth={3} className="mr-2" />
          {props.children}
        </>
      )}
      {error && (
        <>
          <XCircle size={24} strokeWidth={3} className="mr-2" />
          {props.children}
        </>
      )}
      {upload && (
        <>
          <Upload size={24} strokeWidth={3} className="mr-2" />
          {props.children}
        </>
      )}
      {remove && (
        <>
          <Trash2 size={24} strokeWidth={3} className="mr-2" />
          {props.children}
        </>
      )}
      {normal && <>{props.children}</>}
      {loading && (
        <>
          <RotateCw size={24} strokeWidth={3} className="animate-spin mr-2" />
          {props.children}
        </>
      )}
      {!success && !error && !upload && !remove && !normal && !loading && props.children}
    </button>
  );
}
