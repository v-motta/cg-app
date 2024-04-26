import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Login() {
  return (
    <>
      <div className="absolute start-0 top-0 m-3">
        <ModeToggle />
      </div>
      <div className="w-screen h-screen flex justify-center items-center">
        <Tabs defaultValue="login" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Entrar</TabsTrigger>
            <TabsTrigger value="register">Cadastrar</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <Card>
              <CardContent className="space-y-3 pt-6">
                <div className="space-y-1">
                  <Label htmlFor="username">Usuário</Label>
                  <Input id="username" type="text" placeholder="costguardian" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">Senha</Label>
                  <Input id="password" type="password" />
                </div>
                <div className="flex items-end justify-between">
                  <div className="flex items-center space-x-2 mt-3">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">Lembrar-me</Label>
                  </div>
                  <a href="#" className="underline text-sm">
                    Esqueceu a senha?
                  </a>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Entrar</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="register">
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
                  <Input
                    id="email"
                    type="email"
                    placeholder="admin@costguardian.com"
                  />
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
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}

export default Login;
