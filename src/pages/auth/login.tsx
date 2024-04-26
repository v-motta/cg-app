import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SubmitHandler, useForm } from "react-hook-form";

type LoginInputs = {
  username: string;
  password: string;
};

function Login() {
  return (
    <>
      <div className="absolute start-0 top-0 m-3">
        <ModeToggle />
      </div>
      <div className="w-screen h-screen flex justify-center items-center">
        <Tabs defaultValue="login" className=" w-3/4 md:w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Entrar</TabsTrigger>
            <TabsTrigger value="register">Cadastrar</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <CardLogin />
          </TabsContent>
          <TabsContent value="register">
            <CardRegister />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}

function CardLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();
  const onSubmit: SubmitHandler<LoginInputs> = (data) => console.log(data);

  return (
    <Card>
      <CardContent>
        <form className="space-y-3 pt-6">
          <div className="space-y-1">
            <Label htmlFor="username">Usuário</Label>
            <Input
              {...register("username", {
                required: true,
                minLength: 3,
                maxLength: 50,
              })}
              id="username"
              type="text"
              placeholder="costguardian"
              className={errors.username && "border-red-600"}
            />
            {errors.username?.type === "required" && (
              <small className="text-red-600">Preencha este campo</small>
            )}
            {errors.username?.type === "minLength" && (
              <small className="text-red-600">
                Digite mais de 3 caracteres
              </small>
            )}
            {errors.username?.type === "maxLength" && (
              <small className="text-red-600">
                Digite menos de 50 caracteres
              </small>
            )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Senha</Label>
            <Input
              {...register("password", { required: true, minLength: 8 })}
              id="password"
              type="password"
              className={errors.username && "border-red-600"}
            />
            {errors.password?.type === "required" && (
              <small className="text-red-600">Preencha este campo</small>
            )}
            {errors.password?.type === "minLength" && (
              <small className="text-red-600">
                Digite mais de 8 caracteres
              </small>
            )}
          </div>
          <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between space-y-2 sm:space-y-0">
            <div className="flex items-center space-x-2 mt-3">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Lembrar-me</Label>
            </div>
            <a href="#" className="underline text-sm">
              Esqueceu a senha?
            </a>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleSubmit(onSubmit)}>
          Entrar
        </Button>
      </CardFooter>
    </Card>
  );
}

function CardRegister() {
  return (
    <Card>
      <CardContent className="space-y-2 pt-6">
        <div className="space-y-1">
          <Label htmlFor="name">Nome</Label>
          <Input id="name" type="text" placeholder="Cost Guardian" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="username">Usuário</Label>
          <Input id="username" type="text" placeholder="costguardian" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="admin@costguardian.com" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="password">Senha</Label>
          <Input id="password" type="password" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Cadastrar</Button>
      </CardFooter>
    </Card>
  );
}

export default Login;
