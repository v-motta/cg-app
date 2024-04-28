import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LoginInputs, RegisterInputs } from "@/models/auth";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

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
    control,
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
                required: "Preencha este campo",
                minLength: {
                  value: 3,
                  message: "Digite mais de 3 caracteres",
                },
                maxLength: {
                  value: 50,
                  message: "Digite menos de 50 caracteres",
                },
              })}
              id="username"
              type="text"
              placeholder="costguardian"
              className={errors.username && "border-red-600"}
            />
            <small className="text-red-600">{errors.username?.message}</small>
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Senha</Label>
            <Input
              {...register("password", {
                required: "Preencha este campo",
                minLength: {
                  value: 8,
                  message: "Digite mais de 8 caracteres",
                },
              })}
              id="password"
              type="password"
              className={errors.username && "border-red-600"}
            />
            <small className="text-red-600">{errors.password?.message}</small>
          </div>
          <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between space-y-2 sm:space-y-0">
            <div className="flex items-center space-x-2 mt-3">
              <Controller
                name="remember"
                control={control}
                defaultValue={false}
                render={({ field }) => (
                  <Checkbox
                    id="remember"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                )}
              />
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputs>();
  const onSubmit: SubmitHandler<RegisterInputs> = (data) => console.log(data);

  return (
    <Card>
      <CardContent>
        <form className="space-y-2 pt-6">
          <div className="space-y-1">
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              type="text"
              placeholder="Cost Guardian"
              {...register("name", {
                required: "Preencha este campo",
                minLength: {
                  value: 3,
                  message: "Digite mais de 3 caracteres",
                },
                maxLength: {
                  value: 150,
                  message: "Digite menos de 150 caracteres",
                },
              })}
              className={errors.name && "border-red-600"}
            />
            <small className="text-red-600">{errors.name?.message}</small>
          </div>
          <div className="space-y-1">
            <Label htmlFor="username">Usuário</Label>
            <Input
              id="username"
              type="text"
              placeholder="costguardian"
              {...register("username", {
                required: "Preencha este campo",
                minLength: {
                  value: 3,
                  message: "Digite mais de 3 caracteres",
                },
                maxLength: {
                  value: 50,
                  message: "Digite menos de 50 caracteres",
                },
              })}
              className={errors.username && "border-red-600"}
            />
            <small className="text-red-600">{errors.username?.message}</small>
          </div>
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="admin@costguardian.com"
              {...register("email", {
                required: "Preencha este campo",
                pattern: {
                  value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                  message: "Please enter a valid email",
                },
                maxLength: {
                  value: 255,
                  message: "Digite menos de 255 caracteres",
                },
              })}
              className={errors.email && "border-red-600"}
            />
            <small className="text-red-600">{errors.email?.message}</small>
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              type="password"
              {...register("password", {
                required: "Preencha este campo",
                minLength: {
                  value: 8,
                  message: "Digite mais de 8 caracteres",
                },
                maxLength: {
                  value: 255,
                  message: "Digite menos de 255 caracteres",
                },
              })}
              className={errors.password && "border-red-600"}
            />
            <small className="text-red-600">{errors.password?.message}</small>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleSubmit(onSubmit)}>
          Cadastrar
        </Button>
      </CardFooter>
    </Card>
  );
}

export default Login;
