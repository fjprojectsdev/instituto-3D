import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [images, setImages] = useState({
    hero: "",
    about: "",
    project1: "",
    project2: "",
    project3: ""
  });
  const { toast } = useToast();

  useEffect(() => {
    const auth = localStorage.getItem("admin_auth");
    if (auth === "authenticated") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "projeto3d" && password === "instituto3d") {
      setIsAuthenticated(true);
      localStorage.setItem("admin_auth", "authenticated");
      toast({
        title: "Login realizado com sucesso!",
        description: "Bem-vindo ao painel administrativo.",
      });
    } else {
      toast({
        title: "Erro de autenticação",
        description: "Usuário ou senha incorretos.",
        variant: "destructive",
      });
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("admin_auth");
    setUsername("");
    setPassword("");
  };

  const handleImageUpload = (imageType: string, file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setImages(prev => ({
        ...prev,
        [imageType]: result
      }));
      localStorage.setItem(`image_${imageType}`, result);
      toast({
        title: "Imagem atualizada!",
        description: `Imagem ${imageType} foi alterada com sucesso.`,
      });
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    Object.entries(images).forEach(([key, value]) => {
      if (value) {
        localStorage.setItem(`image_${key}`, value);
      }
    });
    toast({
      title: "Alterações salvas!",
      description: "Todas as imagens foram atualizadas.",
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-emerald-500">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center">Painel Administrativo</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                type="text"
                placeholder="Usuário"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <Input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Button type="submit" className="w-full">
                Entrar
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Painel Administrativo - Instituto 3D</h1>
          <Button onClick={handleLogout} variant="outline">
            Sair
          </Button>
        </div>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Gerenciar Imagens do Site</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                { key: "hero", label: "Imagem Principal (Hero)" },
                { key: "about", label: "Imagem Sobre Nós" },
                { key: "project1", label: "Projeto 1 - Cestas Básicas" },
                { key: "project2", label: "Projeto 2 - Evangelização" },
                { key: "project3", label: "Projeto 3 - Ações Emergenciais" }
              ].map(({ key, label }) => (
                <div key={key} className="space-y-2">
                  <label className="text-sm font-medium">{label}</label>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        handleImageUpload(key, file);
                      }
                    }}
                  />
                  {images[key as keyof typeof images] && (
                    <img
                      src={images[key as keyof typeof images]}
                      alt={label}
                      className="w-32 h-24 object-cover rounded border"
                    />
                  )}
                </div>
              ))}
              
              <Button onClick={handleSave} className="w-full">
                Salvar Todas as Alterações
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Admin;