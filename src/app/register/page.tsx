import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { UserRegisterForm } from "./components/user-register-form";

export const metadata: Metadata = {
  title: "O Pedal Café - Criar Conta",
  description: "Página de Criar Conta do Pedal Café",
};

export default function RegisterPage() {
  return (
    <>
      <div className="container relative flex h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="lg:p-8">
          <div className="mx-auto flex w-full max-w-md flex-col justify-center space-y-6">
            <div className="flex flex-col space-y-2 text-center">
              <Image
                src="/logo.png"
                alt="Logo O Pedal Café"
                sizes="100vw"
                height={0}
                width={0}
                className="mx-auto h-auto w-72 object-cover"
              />
            </div>
            <UserRegisterForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              Já possui uma conta?{" "}
              <Link
                href="/login"
                className="underline underline-offset-4 hover:text-primary"
              >
                Faça login
              </Link>
            </p>
          </div>
        </div>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="bg-register absolute inset-0 bg-cover bg-center" />
        </div>
      </div>
    </>
  );
}