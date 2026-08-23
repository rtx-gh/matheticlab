interface KatexToken {
  text: string;
}

interface KatexArgument {
  tokens: KatexToken[];
}

interface MacroContext {
  consumeArg(): KatexArgument;
  consumeSpaces(): void;
  future(): KatexToken;
}

type MacroFunction = (context: MacroContext) => string;

/**
 * KaTeX の consumeArg() が返す tokens はスタック順（逆順）なので、
 * 通常の TeX 文字列へ戻す。
 */
const argumentToString = (argument: KatexArgument): string =>
  argument.tokens
    .slice()
    .reverse()
    .map((token) => token.text)
    .join("");

/**
 * 次に {...} 形式の引数があるか確認する。
 *
 * \dv{x} のような書き方だけでなく、
 * \dv {x} のように空白が入っていても認識できるようにする。
 */
const hasBracedArgument = (context: MacroContext): boolean => {
  context.consumeSpaces();
  return context.future().text === "{";
};

const variableDerivative = (
  numeratorSymbol: string,
  denominatorSymbol: string,
  display = false
): MacroFunction => {
  return (context: MacroContext): string => {
    const style = display ? "\\displaystyle" : "";

    /*
     * 0引数
     *
     *   \dv
     *     -> d/d
     *
     *   \pdv
     *     -> ∂/∂
     */
    if (!hasBracedArgument(context)) {
      return `${style}\\frac{${numeratorSymbol}}{${denominatorSymbol}}`;
    }

    const first = argumentToString(context.consumeArg());

    /*
     * 2引数
     *
     *   \dv{f}{x}
     *     -> df/dx
     *
     *   \pdv{f}{x}
     *     -> ∂f/∂x
     */
    if (hasBracedArgument(context)) {
      const second = argumentToString(context.consumeArg());

      return (
        `${style}\\frac{` +
        `${numeratorSymbol}\\,${first}` +
        `}{` +
        `${denominatorSymbol}\\,${second}` +
        `}`
      );
    }

    /*
     * 1引数
     *
     *   \dv{x}
     *     -> d/dx
     *
     *   \pdv{x}
     *     -> ∂/∂x
     */
    return (
      `${style}\\frac{${numeratorSymbol}}{` +
      `${denominatorSymbol}\\,${first}` +
      `}`
    );
  };
};

export type KatexMacro = string | MacroFunction;

export const derivativeMacros: Record<string, KatexMacro> = {
  // 微分記号
  "\\dd": "\\mathrm{d}",

  // 常微分
  "\\dv": variableDerivative(
    "\\mathrm{d}",
    "\\mathrm{d}"
  ),

  // 常微分（display style）
  "\\ddv": variableDerivative(
    "\\mathrm{d}",
    "\\mathrm{d}",
    true
  ),

  // 偏微分
  "\\pdv": variableDerivative(
    "\\partial",
    "\\partial"
  ),

  // 偏微分（display style）
  "\\dpdv": variableDerivative(
    "\\partial",
    "\\partial",
    true
  ),
};
