
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useRegistration } from "@/context/RegistrationContext";

const documentSchema = z.object({
  idNumber: z.string().min(5, { message: "Número do documento deve ter pelo menos 5 caracteres" }),
  idType: z.string().min(1, { message: "Tipo de documento é obrigatório" }),
  idPhoto: z.string().optional(),
});

type DocumentFormValues = z.infer<typeof documentSchema>;

const DocumentVerificationStep: React.FC = () => {
  const { registrationData, updateDocuments, nextStep, prevStep } = useRegistration();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const form = useForm<DocumentFormValues>({
    resolver: zodResolver(documentSchema),
    defaultValues: {
      idNumber: registrationData.documents.idNumber,
      idType: registrationData.documents.idType || "RG",
      idPhoto: "",
    },
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data: DocumentFormValues) => {
    updateDocuments({
      ...data,
      idPhoto: previewUrl,
    });
    nextStep();
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">Verificação de Documentos</CardTitle>
        <CardDescription>
          Preencha os dados do seu documento e envie uma foto para verificação
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="idType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipo de Documento</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o tipo de documento" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="RG">RG</SelectItem>
                      <SelectItem value="CNH">CNH</SelectItem>
                      <SelectItem value="Passaporte">Passaporte</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="idNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Número do Documento</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite o número do documento" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="idPhoto"
              render={({ field: { value, onChange, ...field } }) => (
                <FormItem>
                  <FormLabel>Foto do Documento</FormLabel>
                  <FormControl>
                    <div className="space-y-4">
                      <Input 
                        type="file" 
                        accept="image/*"
                        onChange={(e) => {
                          handleFileChange(e);
                          onChange(e);
                        }}
                        {...field}
                      />
                      {previewUrl && (
                        <div className="mt-4">
                          <p className="text-sm text-gray-500 mb-2">Prévia:</p>
                          <img
                            src={previewUrl}
                            alt="Prévia do documento"
                            className="max-w-full h-auto max-h-40 border rounded"
                          />
                        </div>
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-between">
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
              >
                Próximo
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default DocumentVerificationStep;
