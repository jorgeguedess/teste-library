export function toCapitalize(value?: string | null) {
  return value ? value.replace(/^\w/, (c) => c.toUpperCase()) : "";
}
