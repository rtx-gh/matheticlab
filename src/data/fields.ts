export type TopicItem = {
  title: string;
  level: number;
};

export type AccordionSection = {
  title: string;
  items?: readonly TopicItem[];
};

export type Field = {
  id: string;
  title: string;
  className: "logic" | "algebra" | "analysis" | "geometry";
  sections: readonly AccordionSection[];
};

/**
 * Markdown風の箇条書きをTopicItem[]へ変換する。
 *
 * - 親
 *   - 子
 *     - 孫
 */
const topicItems = (strings: TemplateStringsArray): TopicItem[] => {
  const lines = strings.raw[0]
    .split("\n")
    .filter((line) => line.trim() !== "");

  const baseIndent = Math.min(
    ...lines.map((line) => line.match(/^\s*/)?.[0].length ?? 0),
  );

  return lines.map((line) => {
    const normalizedLine = line.slice(baseIndent);
    const match = normalizedLine.match(/^(\s*)-\s+(.+)$/);

    if (!match) {
      throw new Error(`箇条書きの形式が不正です: ${normalizedLine}`);
    }

    const indent = match[1].replaceAll("\t", "  ").length;

    if (indent % 2 !== 0) {
      throw new Error(
        `インデントは半角スペース2個単位で指定してください: ${normalizedLine}`,
      );
    }

    return {
      title: match[2].trim(),
      level: indent / 2,
    };
  });
};

const universityFields: readonly Field[] = [
  {
    id: "logic",
    title: "集合と論理",
    className: "logic",
    sections: [
      { title: "集合論",
        items: topicItems`
          - 集合
            - 外延的記法・内包的記法
          - 集合の演算
            - 和集合
            - 共通部分
            - 差集合
            - 補集合
          - 集合族とその操作
          - 二項関係
            - 写像
            - 同値関係と商集合
          - 順序集合
            - 帰納的極限と射影的極限
            - 整列集合
          - ZF公理系と選択公理`
       },
      { title: "数理論理学" },
    ],
  },

  {
    id: "algebra",
    title: "代数学",
    className: "algebra",
    sections: [
      {
        title: "線形代数学",
        items: topicItems`
          - 平面と空間のベクトル
          - 行列
          - 置換
          - 行列式とその性質
          - 行列式の展開
          - 連立一次方程式
          - 行列式の積

          - 数ベクトル空間
            - 数ベクトル空間
            - 線形独立・基底・次元
            - 次元定理

          - 体上のベクトル空間
            - 体上のベクトル空間
            - 基底と次元
            - 線形写像
            - 次元定理

          - 行列の標準化
          - 固有値と固有ベクトル
        `,
      },

      {
        title: "群論",
        items: topicItems`
          - 群の定義と性質
          - 部分群
          - 正規部分群と剰余群
          - 群の準同型定理
          - 群の作用
          - Sylowの定理
        `,
      },

      {
        title: "環論･可換環論",
        items: topicItems`
          - イデアル論
            - イデアルの定義と性質
            - イデアルの商と剰余環
            - イデアルの生成
            - 単項イデアル、素イデアル、極大イデアル
            - イデアルの分解

          - 加群論
            - $R$-加群
              - $R$-加群の定義
              - $R$-線形写像
                - Hom加群
                  - $R$-加群の核と余核の定義と普遍性

            - $R$-加群の完全系列

            - $R$-加群の直和
              - 直和の定義と普遍性

            - 射影加群、入射加群

            - $R$-加群のテンソル積
              - テンソル積の定義と普遍性

            - 平坦加群

          - ネーター環論
            - ネーター環の定義と性質
            - ネーター加群の定義と性質
            - ネーター環のイデアルの性質
            - ネーター環のイデアルの分解
        
        `,
      },

      {
        title: "体論",
        items: topicItems`
          - 体の定義と性質
          - 体の拡大
          - 代数的拡大と超越拡大
          - 代数的閉体
          - ガロア理論
        `,
      },

      {
        title: "代数的整数論",
        items: topicItems`
          - 整数環
          - 代数的整数
          - 整数環のイデアル
          - イデアルの分解
          - イデアル類群
        `,
      },

      {
        title: "ホモロジー代数学",
        items: topicItems`
          - 蛇の補題
          - $5$ 補題
          - 短完全列 $\to$ 長完全列
          - Ext関手
          - Tor関手
          - 導来関手
          - 前層、茎、層、芽
          - コホモロジー
          - アーベル圏
          - 加法圏
        `,
      },

      {
        title: "射影幾何学",
        items: topicItems`
          - 射影平面
          - 射影空間
          - 射影変換
          - 射影幾何学の基本定理
        `,
      },

      {
        title: "代数幾何学",
        items: topicItems`
          - アフィン多様体
          - 射影多様体
          - 代数多様体
          - 代数曲線
          - 代数曲面
        `,
      },

      {
        title: "表現論",
        items: topicItems`
          - 群の表現
          - 代数群の表現
          - リー群の表現
          - リー環の表現
        `,
      },

      {
        title: "圏論",
        items: topicItems`
          - 圏の定義
          - 関手の定義
          - 自然変換の定義
          - 圏の極限と余極限
          - アーベル圏
          - 導来関手
        `,
      },

      {
        title: "環論",
      },

      {
        title: "加群",
      },
    ],
  },

  {
    id: "analysis",
    title: "解析学",
    className: "analysis",
    sections: [
      {
        title: "微分積分学",
        items: topicItems`
          - 数列
            - 実数の絶対値
            - 上限・下限
            - 数列の極限値
            - 上極限・下極限
            - 級数

          - 実数
            - デデキント切断を用いた実数の構成
            - 数列の極限
            - コーシー列を用いた実数の構成
            - 実数の連続性に関する命題の同値性

          - 関数
            - 関数
            - 関数の極限値
            - 連続関数、関数の連続性
            - 有界閉区間とその上の連続関数

          - 微分法
            - 微分係数、導関数
            - 高階導関数
            - 導関数の性質①
            - 微分可能性
            - 平均値の定理
            - テイラーの定理

          - 積分法
            - リーマン積分
            - リーマン積分の性質
            - 可積分条件
            - 連続関数の積分可能性
            - 微分積分学の基本定理
            - 置換積分、部分積分、広義積分
            - 積分の応用

          - 関数列
            - 一様収束
            - 一様収束の性質
            - 広義一様収束

          - 多変数関数と偏微分
            - 偏導関数、全微分可能性
            - 高階偏導関数
            - テイラー展開
            - 多変数関数の極大・極小

          - 級数、べき級数
            - 級数
            - べき級数
            - 絶対収束、条件収束
            - 二重級数
            - 無限乗積
            - 連分数

          - 陰関数の定理
            - 逆写像定理、陰関数の定理
            - 多変数関数の極値
            - 平面曲線、接平面

          - 重積分
            - 重積分・累次積分

          - 曲線･曲面
            - 曲線
            - 曲面積
            - 線積分・面積分
            - グリーンの定理、ガウスの定理、ストークスの定理

          - その他
            - ガンマ関数
            - 広義リーマン積分
            - 2変数関数のテイラー展開
            - 各点収束・一様収束・絶対収束
            - ガウス積分
        `,
      },

      {
        title: "複素解析",
        items: topicItems`
          - 複素数
            - 複素数の定義と性質
            - 複素平面と極形式
            - 複素数の指数関数、三角関数、双曲線関数

          - 複素関数
            - 複素関数の定義と性質
            - 正則関数、コーシー・リーマンの方程式
            - 解析接続、孤立特異点

          - 積分論
            - 複素積分の定義と性質
            - コーシーの積分定理、コーシーの積分公式
            - ローラン展開、留数定理

          - 収束級数
            - べき級数、テイラー展開、ローラン展開
            - 収束半径、収束円板
            - 一様収束、絶対収束

          - 特殊関数
            - ガンマ関数、ベータ関数
            - リーマンゼータ関数、ディリクレL関数
        `,
      },

      {
        title: "常微分方程式",
        items: topicItems`
          - 常微分方程式の定義と性質
          - 一階常微分方程式
            - 変数分離形
            - 同次形
            - 線形形
            - ベルヌーイ形
          - 高階常微分方程式
            - 線形微分方程式の定義と性質
            - 定数係数線形微分方程式
            - 変数変換法、級数解法、ラプラス変換法
        `,
      },

      {
        title: "フーリエ解析",
        items: topicItems`
          - フーリエ級数展開
          - フーリエ変換
          - ラプラス変換
        `,
      },

      {
        title: "ルベーグ積分論",
        items: topicItems`
          - ルベーグ積分の定義と性質
          - 可測関数
          - ルベーグ積分の収束定理
        `,
      },

      {
        title: "関数解析",
        items: topicItems`
          - ヒルベルト空間
          - バナッハ空間
          - 線形作用素
          - スペクトル理論
        `,
      },

      {
        title: "偏微分方程式",
        items: topicItems`
          - 偏微分方程式の定義と性質
          - 一次偏微分方程式
          - 二次偏微分方程式
        `,
      },

      {
        title: "解析的整数論",
        items: topicItems`
          - 素数定理
          - リーマンゼータ関数
          - ディリクレ級数
        `,  
      },

      {
        title: "偏微分方程式論",
        items: topicItems`
          - 偏微分方程式の定義と性質
          - 一次偏微分方程式
          - 二次偏微分方程式
        `, 
      },
    ],
  },

  {
    id: "geometry",
    title: "幾何学",
    className: "geometry",
    sections: [
      { title: "位相空間論",
        items: topicItems`
          - 位相空間の定義と性質
          - 開集合・閉集合・内点・外点・境界点
          - 連結性・コンパクト性
          - 連続写像と同相写像
          - 基底と準基底
          - 距離空間と位相空間
          - 完備距離空間と完備化
        `
       },
      { title: "位相幾何学",
        items: topicItems`
          - 位相同値とホモトピー
          - ホモロジー群とコホモロジー群
          - 基本群と被覆空間
          - CW複体とセル複体
        `
       },
      { title: "多様体論",
        items: topicItems`
          - 多様体の定義と性質
          - 微分可能多様体と滑らかな写像
          - 接空間と接ベクトル場
          - リーマン計量と測地線
          - 微分形式と外微分
          - ストークスの定理とグリーンの定理
        `
       },
      { title: "微分幾何学",
        items: topicItems`
          - 曲線と曲率
          - 曲面とガウス曲率
          - リーマン多様体とリーマン計量
          - リーマン曲率テンソルとリッチ曲率テンソル
          - リーマン幾何学の応用
        `
       },
    ],
  },
];

export type EducationLevel = {
  id: "university" | "high-school" | "junior-high";
  title: string;
  fields: readonly Field[];
};

/**
 * 学習段階ごとの数学分野。
 * 高校数学・中学数学は、項目を追加するまで空配列として表示する。
 */
export const educationLevels: readonly EducationLevel[] = [
  {
    id: "university",
    title: "大学数学",
    fields: universityFields,
  },
  {
    id: "high-school",
    title: "高校数学",
    fields: [],
  },
  {
    id: "junior-high",
    title: "中学数学",
    fields: [],
  },
];

// 既存コードとの互換性が必要な場合に使える大学数学の分野一覧。
export const fields = universityFields;
