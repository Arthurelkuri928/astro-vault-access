
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "@/components/dashboard/Header";
import { mockProducts } from "@/components/dashboard/ProductGrid";
import { Product } from "@/components/dashboard/ProductCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ProductDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  
  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem("astroUser");
    if (!user) {
      navigate("/");
      return;
    }
    
    // Find the product by ID
    const foundProduct = mockProducts.find(p => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      navigate("/dashboard");
    }
  }, [navigate, id]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p>Carregando produto...</p>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-8">
          <Button 
            variant="outline" 
            onClick={() => navigate("/dashboard/products")}
            className="mb-6"
          >
            ← Voltar para produtos
          </Button>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="overflow-hidden rounded-lg">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
            
            <div>
              <Card className="p-6 h-full border border-border/40 bg-card/80 backdrop-blur-sm">
                <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
                <p className="text-muted-foreground mb-6">{product.description}</p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-2">Conteúdo do Produto:</h3>
                    <ul className="space-y-1 list-disc list-inside text-sm text-muted-foreground">
                      <li>12 módulos de aprendizado</li>
                      <li>25+ horas de conteúdo em vídeo</li>
                      <li>Materiais complementares em PDF</li>
                      <li>Certificado de conclusão</li>
                      <li>Acesso vitalício</li>
                    </ul>
                  </div>
                  
                  <Button className="w-full bg-astro-primary hover:bg-astro-accent">
                    Acessar Conteúdo
                  </Button>
                  
                  <Button variant="outline" className="w-full">
                    Baixar Materiais
                  </Button>
                </div>
              </Card>
            </div>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Detalhes do Produto</h2>
            
            <div className="prose prose-invert max-w-none">
              <p>
                Este produto inclui acesso completo a todas as aulas, materiais e recursos exclusivos.
                Nosso conteúdo é desenvolvido por especialistas em astronomia e astrofísica, garantindo
                a mais alta qualidade de informação e aprendizado.
              </p>
              <p>
                Com acesso vitalício, você pode estudar no seu próprio ritmo e revisar o conteúdo
                sempre que precisar. Os materiais são constantemente atualizados com as mais recentes
                descobertas e pesquisas na área.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="py-6 border-t border-border/40 bg-background/90 backdrop-blur-sm">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Astro Vault. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ProductDetail;
