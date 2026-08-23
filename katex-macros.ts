export const katexMacros = {

  // =========================================================
  // 二項係数
  // =========================================================

  "\\perm": "{}_{#1} \\mathrm{P}_{#2}",
  "\\bc": "{}_{#1} \\mathrm C_{#2}",
  "\\comb": "{}_{#1} \\mathrm C_{#2}",


  // =========================================================
  // 大型演算子
  // =========================================================

  "\\dbigcap": "\\displaystyle\\bigcap",
  "\\dbigcup": "\\displaystyle\\bigcup",

  "\\dx": "\\mathrm{dx}",

  "\\dinf": "\\displaystyle\\inf",
  "\\dint": "\\displaystyle\\int",
  "\\diint": "\\displaystyle\\iint",

  "\\dlim": "\\displaystyle\\lim",
  "\\dliminf": "\\displaystyle\\liminf",
  "\\dlimsup": "\\displaystyle\\limsup",

  "\\doint": "\\displaystyle\\oint",

  "\\dprod": "\\displaystyle\\prod",
  "\\dsum": "\\displaystyle\\sum",
  "\\dsup": "\\displaystyle\\sup",

  "\\dmax": "\\displaystyle\\max",
  "\\dmin": "\\displaystyle\\min",

  "\\dbigoplus": "\\displaystyle\\bigoplus",
  "\\dbinom": "\\displaystyle\\binom",

  "\\ddv": "\\displaystyle\\dv",
  "\\dpdv": "\\displaystyle\\pdv",


  // =========================================================
  // 位相幾何学
  // =========================================================

  "\\H": "\\mathrm{H}",


  // =========================================================
  // 線形代数
  // =========================================================

  "\\subspace":
    "\\overset{部分空間}{\\subseteq}",


  // =========================================================
  // 群論
  // =========================================================

  "\\subgroup":
    "\\overset{部分群}{\\subseteq}",

  "\\lhdeq":
    "\\trianglelefteq",

  "\\rhdeq":
    "\\trianglerighteq",

  "\\lhdneq":
    "\\lneq\\!\\!\\!\\!:\\!\\lhdeq",

  "\\rhdneq":
    "\\rneq\\!\\!\\!\\!:\\!\\rhdeq",

  "\\grouphom":
    "\\xrightarrow{群準同型}",

  "\\gcong":
    "\\overset{\\mathrm{group}}{\\cong}",


  // =========================================================
  // 可換環論
  // =========================================================

  "\\fa": "\\mathfrak{a}",
  "\\fb": "\\mathfrak{b}",
  "\\fc": "\\mathfrak{c}",

  "\\m": "\\mathfrak{m}",
  "\\p": "\\mathfrak{p}",

  "\\subring":
    "\\overset{部分環}{\\subseteq}",

  "\\ideal":
    "\\overset{イデアル}{\\subseteq}",

  "\\idealneq":
    "\\overset{イデアル}{\\subsetneq}",

  "\\primeideal":
    "\\overset{素イデアル}{\\subsetneq}",

  "\\maxideal":
    "\\overset{極大イデアル}{\\subsetneq}",

  "\\ringhom":
    "\\xrightarrow{環準同型}",

  "\\unit":
    "{#1}^{\\times}",

  "\\zerodivisor":
    "\\overset{零因子}{\\in}",

  "\\nzerodivisor":
    "\\overset{零因子}{\\notin}",

  "\\primeelement":
    "\\overset{素元}{\\in}",

  "\\nprimeelement":
    "\\overset{素元}{\\notin}",

  "\\irreducible":
    "\\overset{既約元}{\\in}",

  "\\nirreducible":
    "\\overset{既約元}{\\notin}",

  "\\primitive":
    "\\overset{原始多項式}{\\in}",

  "\\nprimitive":
    "\\overset{原始多項式}{\\notin}",

  "\\intin":
    "\\overset{整}{\\in_{#1}}",

  "\\intsubseteq":
    "\\overset{整}{\\subseteq_{#1}}",

  "\\intsubsetneq":
    "\\overset{整}{\\subsetneq_{#1}}",

  "\\intcleq":
    "\\overset{整閉包}{\\subseteq_{#1}}",

  "\\intclneq":
    "\\overset{整閉包}{\\subsetneq_{#1}}",

  "\\associate":
    "\\overset{同伴}{\\sim}",

  "\\submod":
    "\\overset{部分{#1}\\text{-}加群}{\\subseteq}",

  "\\overto":
    "\\overset{#1}{\\to}",


  // =========================================================
  // 体論
  // =========================================================

  "\\gal": "\\mathrm{Gal}",


  // =========================================================
  // 圏論
  // =========================================================

  "\\hom":
    "\\operatorname{Hom}",

  "\\ran":
    "\\operatorname{Ran}",

  "\\sA":
    "\\mathscr{A}",

  "\\sB":
    "\\mathscr{B}",

  "\\sC":
    "\\mathscr{C}",

  "\\id":
    "\\mathrm{id}",

  "\\Ab":
    "\\mathbf{Ab}",

  "\\Set":
    "\\mathbf{Set}",

  "\\Grp":
    "\\mathbf{Grp}",

  "\\Ring":
    "\\mathbf{Ring}",

  "\\Mod":
    "{#1}\\text{-}\\mathbf{Mod}",

  "\\Vect":
    "{#1}\\text{-}\\mathbf{Vect}",

  "\\Top":
    "\\mathbf{Top}",

  "\\Ord":
    "\\mathbf{Ord}",

  "\\Rel":
    "\\mathbf{Rel}",

  "\\Cat":
    "\\mathbf{Cat}",

  "\\CAT":
    "\\mathbf{CAT}",

  "\\To":
    "\\Rightarrow",

  "\\op":
    "\\mathrm{op}",

  "\\ob":
    "\\mathrm{Ob}",


  // =========================================================
  // 数学定数
  // =========================================================

  "\\e":
    "\\mathrm{e}",

  "\\i":
    "\\mathrm{i}",

  "\\B":
    "\\mathrm{B}",


  // =========================================================
  // 座標軸
  // =========================================================

  "\\x":
    "\\mathrm{x}",

  "\\y":
    "\\mathrm{y}",

  "\\z":
    "\\mathrm{z}",


  // =========================================================
  // 行列
  // =========================================================

  "\\M":
    "\\mathrm{M}",


  // =========================================================
  // 記号論理学
  // =========================================================

  "\\A":
    "{}^\\forall",

  "\\E":
    "{}^\\exists",

  "\\lor":
    "\\overset{または}{\\ \\vee\\ }",

  "\\land":
    "\\overset{かつ}{\\ \\wedge\\ }",

  "\\implies":
    "\\overset{ならば}{\\ \\Longrightarrow\\ }",

  "\\iff":
    "\\overset{同値}{\\;\\Longleftrightarrow\\;}",

  "\\bottom":
    "\\overset{矛盾}{\\bot}",

  "\\defiff":
    "\\overset{\\mathrm{def}}{\\;\\Longleftrightarrow\\;}",


  // =========================================================
  // 集合論
  // =========================================================

  "\\N":
    "\\mathbb{N}",

  "\\Z":
    "\\mathbb{Z}",

  "\\Q":
    "\\mathbb{Q}",

  "\\R":
    "\\mathbb{R}",

  "\\C":
    "\\mathbb{C}",

  "\\F":
    "\\mathcal{F}",

  "\\P":
    "\\mathcal{P}",

  "\\S":
    "\\mathcal{S}",

  "\\O":
    "\\mathcal{O}",


  // =========================================================
  // 括弧
  // =========================================================

  "\\angle":
    "\\left\\langle {#1} \\right\\rangle",

  "\\bigangle":
    "\\left\\langle {#1} \\rule{0pt}{2ex}\\right\\rangle",

  "\\Bigangle":
    "\\left\\langle {#1} \\rule{0pt}{2.5ex}\\right\\rangle",

  "\\biggangle":
    "\\left\\langle {#1} \\rule{0pt}{3ex}\\right\\rangle",

  "\\Biggangle":
    "\\left\\langle {#1} \\rule{0pt}{4ex}\\right\\rangle",


  // =========================================================
  // 演算子
  // =========================================================

  "\\sgn":
    "\\operatorname{sgn}",

  "\\spec":
    "\\operatorname{Spec}",

  "\\supp":
    "\\operatorname{Supp}",

  "\\span":
    "\\operatorname{span}",

  "\\V":
    "\\mathrm{V}",

  "\\adj":
    "\\operatorname{adj}",

  "\\bil":
    "\\operatorname{Bil}",

  "\\im":
    "\\operatorname{Im}",

  "\\Im":
    "\\operatorname{Im}",

  "\\ker":
    "\\operatorname{Ker}",

  "\\Ker":
    "\\operatorname{Ker}",

  "\\coker":
    "\\operatorname{Coker}",

  "\\coim":
    "\\operatorname{Coim}",

  "\\curl":
    "\\operatorname{curl}",

  "\\det":
    "\\operatorname{det}",


  // =========================================================
  // 逆三角関数
  // =========================================================

  "\\arcsin":
    "\\sin^{-1}",

  "\\arccos":
    "\\cos^{-1}",

  "\\arctan":
    "\\tan^{-1}",

  "\\arcsinh":
    "\\sinh^{-1}",

  "\\arccosh":
    "\\cosh^{-1}",

  "\\arctanh":
    "\\tanh^{-1}",


  // =========================================================
  // その他
  // =========================================================

  "\\arc":
    "\\stackrel{\\huge\\frown}{#1}",

  "\\highlightbrace":
    "\\textcolor{#1}{\\underbrace{\\textcolor{black}{#3}}_{\\substack{\\Vert \\\\ #2}}}",

  "\\CancelColor":
    "\\color{red}",

  "\\vector":
    "\\overrightarrow{\\mathrm{#1}}",
};