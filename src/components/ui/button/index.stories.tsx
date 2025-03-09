import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Button, buttonVariants } from ".";
import { action } from "@storybook/addon-actions";
import { VariantProps } from "class-variance-authority";
import {
  ArrowLeftIcon,
  CalendarIcon,
  ChevronsUpDownIcon,
  ClipboardCopy,
  DownloadIcon,
  ListFilterIcon,
  Loader2Icon,
  LoaderCircleIcon,
  MoonIcon,
  SunIcon,
  UploadIcon,
  XIcon,
} from "lucide-react";
import { toCapitalize } from "@/utils";
import { ICON } from "@/components/icons";

type ButtonVariant = VariantProps<typeof buttonVariants>["variant"];
type ButtonSize = VariantProps<typeof buttonVariants>["size"];

const allButtonVariants: ButtonVariant[] = [
  "default",
  "secondary",
  "destructive",
  "outline",
  "ghost",
  "link",
  "table",
  "selection",
  "upload",
] as ButtonVariant[];
const allButtonSizes: ButtonSize[] = ["default", "lg", "sm"] as ButtonSize[];

const meta: Meta<typeof Button> = {
  title: "components/ui/button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      description: "Button variants",
      options: [...allButtonVariants],
    },
    size: {
      control: "select",
      description: "Button sizes",
      options: [...allButtonSizes],
    },
    disabled: {
      control: "boolean",
      description: "Indica se o botão está desabilitado ou não",
    },
    onClick: {
      action: "clicked",
      description: "Função chamada quando o botão padrão é clicado",
    },
    children: {
      control: "text",
      description: "Conteúdo a ser exibido dentro do botão",
    },
    className: {
      control: "text",
      description: "Classes CSS tailwind personalizadas para aplicar ao botão",
    },
    asChild: {
      control: "boolean",
      description:
        "Usada para repassar a renderização do componente para seu filho direto",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

interface CreateButtonStoryProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  onClick?: () => void;
}

const createButtonStory = ({
  variant = "default",
  size = "default",
  disabled = false,
  onClick = action(`${variant} click`),
}: CreateButtonStoryProps): Story => {
  return {
    args: {
      variant,
      size,
      disabled,
      onClick,
      children: `${toCapitalize(variant)} button`,
    },
  };
};

export const Default = createButtonStory({ variant: "default" });
export const Destructive = createButtonStory({ variant: "destructive" });
export const Outline = createButtonStory({ variant: "outline" });
export const Secondary = createButtonStory({ variant: "secondary" });
export const Selection = createButtonStory({ variant: "selection" });
export const Upload = createButtonStory({ variant: "upload" });
export const Ghost = createButtonStory({ variant: "ghost" });
export const Link = createButtonStory({ variant: "link" });
export const Table = createButtonStory({ variant: "table" });

export const AllExamples: StoryFn<typeof Button> = () => {
  return (
    <div className="flex flex-col justify-evenly gap-4">
      {allButtonVariants.map((variant) => (
        <div className="flex flex-wrap gap-4" key={`${variant}`}>
          <p className="w-full grow-1 font-bold">{toCapitalize(variant)}</p>
          {allButtonSizes.map((size) => (
            <div className="flex flex-wrap gap-4">
              <Button
                variant={variant}
                size={size}
                key={size}
                className="first-letter:uppercase"
              >
                {variant} {size}
              </Button>
            </div>
          ))}
          <Button variant={variant} disabled className="first-letter:uppercase">
            {variant} disabled
          </Button>
          <Button variant={variant} disabled>
            <Loader2Icon className="animate-spin" />
            {variant} loading
          </Button>
        </div>
      ))}

      <hr />

      <section className="space-y-2">
        <p className="font-bold">Todas variações</p>
        <div className="flex flex-wrap gap-4">
          {allButtonVariants.map((variant) => (
            <Button variant={variant} key={variant}>
              {variant}
            </Button>
          ))}
          <Button variant="default" disabled>
            disabled
          </Button>
        </div>
      </section>

      <section className="space-y-2">
        <p className="font-bold">Componentes utilizados</p>
        <div className="flex flex-wrap items-start gap-4">
          <Button type="button" variant="upload">
            <ArrowLeftIcon className="h-4 w-4" />
            Etapa anterior
          </Button>
          <Button
            variant="outline"
            className="flex w-full justify-between gap-2 md:max-w-[200px]"
          >
            ivt
            <ChevronsUpDownIcon className="h-4 w-4 shrink-0 opacity-50" />
          </Button>
          <Button
            variant="outline"
            className="text-muted-foreground justify-start text-left font-normal hover:bg-inherit"
          >
            <span>Selecione uma data</span>
            <CalendarIcon className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="b- cursor-default justify-start text-left font-normal opacity-60 hover:bg-inherit"
          >
            <LoaderCircleIcon className="h-4 w-4 animate-spin" />
            <span>carregando...</span>
          </Button>
          <Button variant="secondary" className="px-4 py-2">
            <div className="flex items-center justify-center gap-2">
              <ICON.Command />
              <span className="font-semibold">Buscar (Ctrl+K)</span>
            </div>
          </Button>
          <Button variant="outline" className={`flex items-center space-x-2`}>
            <span>Copiar token</span>
            <ClipboardCopy className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="size-7"
          >
            <XIcon className="size-4" aria-hidden="true" />
            <span className="sr-only">Remover arquivo</span>
          </Button>
          <Button variant="outline" size="icon">
            <SunIcon className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button variant="link">
            <ICON.MenuDashboard className="text-content h-4 w-4" />
          </Button>
          <Button variant="destructive">Limpar Filtros</Button>
          <Button>Aplicar Filtros</Button>
          <Button
            type="button"
            variant="upload"
            className="h-10 gap-1 px-3 py-2.5 font-bold"
          >
            <UploadIcon className="h-4 w-4" /> Upload
          </Button>
          <Button variant="secondary" className="font-medium">
            <ListFilterIcon className="size-4" />
            Filtrar
          </Button>
          <Button variant="secondary">Carregar dados do sistema</Button>
          <Button size="sm">Acatar selecionados</Button>
          <Button
            size="sm"
            variant="upload"
            className="text-primary border-primary border bg-transparent"
          >
            Memória de cálculo
          </Button>
          <Button size="sm">
            <DownloadIcon className="size-4" />
            Baixar CSV
          </Button>
        </div>
      </section>
    </div>
  );
};
