"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllExamples = exports.Table = exports.Link = exports.Ghost = exports.Upload = exports.Selection = exports.Secondary = exports.Outline = exports.Destructive = exports.Default = void 0;
var _1 = require(".");
var addon_actions_1 = require("@storybook/addon-actions");
var lucide_react_1 = require("lucide-react");
var utils_1 = require("@/utils");
var icons_1 = require("@/components/icons");
var allButtonVariants = [
    "default",
    "secondary",
    "destructive",
    "outline",
    "ghost",
    "link",
    "table",
    "selection",
    "upload",
];
var allButtonSizes = ["default", "lg", "sm"];
var meta = {
    title: "components/ui/button",
    component: _1.Button,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        variant: {
            control: "select",
            description: "Button variants",
            options: __spreadArray([], allButtonVariants, true),
        },
        size: {
            control: "select",
            description: "Button sizes",
            options: __spreadArray([], allButtonSizes, true),
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
            description: "Usada para repassar a renderização do componente para seu filho direto",
        },
    },
};
exports.default = meta;
var createButtonStory = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? "default" : _b, _c = _a.size, size = _c === void 0 ? "default" : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, _e = _a.onClick, onClick = _e === void 0 ? (0, addon_actions_1.action)("".concat(variant, " click")) : _e;
    return {
        args: {
            variant: variant,
            size: size,
            disabled: disabled,
            onClick: onClick,
            children: "".concat((0, utils_1.toCapitalize)(variant), " button"),
        },
    };
};
exports.Default = createButtonStory({ variant: "default" });
exports.Destructive = createButtonStory({ variant: "destructive" });
exports.Outline = createButtonStory({ variant: "outline" });
exports.Secondary = createButtonStory({ variant: "secondary" });
exports.Selection = createButtonStory({ variant: "selection" });
exports.Upload = createButtonStory({ variant: "upload" });
exports.Ghost = createButtonStory({ variant: "ghost" });
exports.Link = createButtonStory({ variant: "link" });
exports.Table = createButtonStory({ variant: "table" });
var AllExamples = function () {
    return (<div className="flex flex-col justify-evenly gap-4">
      {allButtonVariants.map(function (variant) { return (<div className="flex flex-wrap gap-4" key={"".concat(variant)}>
          <p className="w-full grow-1 font-bold">{(0, utils_1.toCapitalize)(variant)}</p>
          {allButtonSizes.map(function (size) { return (<div className="flex flex-wrap gap-4">
              <_1.Button variant={variant} size={size} key={size} className="first-letter:uppercase">
                {variant} {size}
              </_1.Button>
            </div>); })}
          <_1.Button variant={variant} disabled className="first-letter:uppercase">
            {variant} disabled
          </_1.Button>
          <_1.Button variant={variant} disabled>
            <lucide_react_1.Loader2Icon className="animate-spin"/>
            {variant} loading
          </_1.Button>
        </div>); })}

      <hr />

      <section className="space-y-2">
        <p className="font-bold">Todas variações</p>
        <div className="flex flex-wrap gap-4">
          {allButtonVariants.map(function (variant) { return (<_1.Button variant={variant} key={variant}>
              {variant}
            </_1.Button>); })}
          <_1.Button variant="default" disabled>
            disabled
          </_1.Button>
        </div>
      </section>

      <section className="space-y-2">
        <p className="font-bold">Componentes utilizados</p>
        <div className="flex flex-wrap items-start gap-4">
          <_1.Button type="button" variant="upload">
            <lucide_react_1.ArrowLeftIcon className="h-4 w-4"/>
            Etapa anterior
          </_1.Button>
          <_1.Button variant="outline" className="flex w-full justify-between gap-2 md:max-w-[200px]">
            ivt
            <lucide_react_1.ChevronsUpDownIcon className="h-4 w-4 shrink-0 opacity-50"/>
          </_1.Button>
          <_1.Button variant="outline" className="text-muted-foreground justify-start text-left font-normal hover:bg-inherit">
            <span>Selecione uma data</span>
            <lucide_react_1.CalendarIcon className="ml-2 h-4 w-4"/>
          </_1.Button>
          <_1.Button variant="outline" className="b- cursor-default justify-start text-left font-normal opacity-60 hover:bg-inherit">
            <lucide_react_1.LoaderCircleIcon className="h-4 w-4 animate-spin"/>
            <span>carregando...</span>
          </_1.Button>
          <_1.Button variant="secondary" className="px-4 py-2">
            <div className="flex items-center justify-center gap-2">
              <icons_1.ICON.Command />
              <span className="font-semibold">Buscar (Ctrl+K)</span>
            </div>
          </_1.Button>
          <_1.Button variant="outline" className={"flex items-center space-x-2"}>
            <span>Copiar token</span>
            <lucide_react_1.ClipboardCopy className="h-4 w-4"/>
          </_1.Button>
          <_1.Button type="button" variant="outline" size="icon" className="size-7">
            <lucide_react_1.XIcon className="size-4" aria-hidden="true"/>
            <span className="sr-only">Remover arquivo</span>
          </_1.Button>
          <_1.Button variant="outline" size="icon">
            <lucide_react_1.SunIcon className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"/>
            <lucide_react_1.MoonIcon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"/>
            <span className="sr-only">Toggle theme</span>
          </_1.Button>
          <_1.Button variant="link">
            <icons_1.ICON.MenuDashboard className="text-content h-4 w-4"/>
          </_1.Button>
          <_1.Button variant="destructive">Limpar Filtros</_1.Button>
          <_1.Button>Aplicar Filtros</_1.Button>
          <_1.Button type="button" variant="upload" className="h-10 gap-1 px-3 py-2.5 font-bold">
            <lucide_react_1.UploadIcon className="h-4 w-4"/> Upload
          </_1.Button>
          <_1.Button variant="secondary" className="font-medium">
            <lucide_react_1.ListFilterIcon className="size-4"/>
            Filtrar
          </_1.Button>
          <_1.Button variant="secondary">Carregar dados do sistema</_1.Button>
          <_1.Button size="sm">Acatar selecionados</_1.Button>
          <_1.Button size="sm" variant="upload" className="text-primary border-primary border bg-transparent">
            Memória de cálculo
          </_1.Button>
          <_1.Button size="sm">
            <lucide_react_1.DownloadIcon className="size-4"/>
            Baixar CSV
          </_1.Button>
        </div>
      </section>
    </div>);
};
exports.AllExamples = AllExamples;
