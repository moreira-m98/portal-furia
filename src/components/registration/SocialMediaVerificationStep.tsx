
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRegistration } from "@/context/RegistrationContext";
import { useToast } from "@/components/ui/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";

const socialMediaSchema = z.object({
  platform: z.string().min(1, { message: "Plataforma é obrigatória" }),
  username: z.string().min(3, { message: "Nome de usuário deve ter pelo menos 3 caracteres" }),
});

type SocialMediaFormValues = z.infer<typeof socialMediaSchema>;

const SocialMediaVerificationStep: React.FC = () => {
  const { registrationData, updateSocialMedia, prevStep, completeRegistration } = useRegistration();
  const [verifying, setVerifying] = useState(false);
  const [verified, setVerified] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<SocialMediaFormValues>({
    resolver: zodResolver(socialMediaSchema),
    defaultValues: {
      platform: registrationData.socialMedia[0]?.platform || "twitter",
      username: registrationData.socialMedia[0]?.username || "",
    },
  });

  const verifyAccount = () => {
    setVerifying(true);
    
    // Simulate verification process
    setTimeout(() => {
      setVerifying(false);
      setVerified(true);
      
      toast({
        title: "Conta verificada com sucesso!",
        description: "Sua conta de rede social foi verificada.",
      });
      
      updateSocialMedia([
        {
          platform: form.getValues("platform"),
          username: form.getValues("username"),
          verified: true,
        },
      ]);
    }, 2000);
  };

  const onSubmit = (data: SocialMediaFormValues) => {
    if (!verified) {
      toast({
        title: "Verificação necessária",
        description: "Por favor, verifique sua conta de rede social antes de continuar.",
        variant: "destructive",
      });
      return;
    }
    
    completeRegistration();
    
    toast({
      title: "Cadastro concluído!",
      description: "Você será redirecionado para o chatbot em instantes.",
    });
    
    setTimeout(() => {
      navigate("/chatbot");
    }, 1500);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">Verificação de Rede Social</CardTitle>
        <CardDescription>
          Conecte sua conta de rede social para verificar sua identidade
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="platform"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Plataforma</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione uma plataforma" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="twitter">Twitter</SelectItem>
                      <SelectItem value="instagram">Instagram</SelectItem>
                      <SelectItem value="facebook">Facebook</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome de Usuário</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="@seuusuario" 
                      {...field} 
                      disabled={verified}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {!verified ? (
              <Button
                type="button"
                className="w-full bg-blue-600 hover:bg-blue-700"
                onClick={verifyAccount}
                disabled={verifying || !form.formState.isValid}
              >
                {verifying ? "Verificando..." : "Verificar Conta"}
              </Button>
            ) : (
              <div className="py-2 px-4 bg-green-100 text-green-800 rounded-md flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Conta verificada com sucesso!
              </div>
            )}

            <div className="flex justify-between mt-6">
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
              >
                Voltar
              </Button>
              <Button
                type="submit"
                className="bg-furia-orange hover:bg-furia-orange/90"
                disabled={!verified}
              >
                Finalizar Cadastro
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default SocialMediaVerificationStep;
