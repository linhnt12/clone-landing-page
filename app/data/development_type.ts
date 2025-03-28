export const steps = [
	{
		title: "要件定義・設計",
		type: "準委任開発",
		effort: "10人月",
		num: 10,
		bg: "bg-[#8DD6FF]",
		arrowColor: "border-l-[#8DD6FF]",
		bubbles: [
			{
				text: "一緒に課題に\n挑みます！",
				top: "0",
				left: "-9rem",
				direction: "topLeft"
			},
			{
				text: "請負に切替\nコスト削減！",
				bottom: "4.5rem",
				right: "6rem",
				direction: "bottomLeft"
			}
		],
	},
	{
		title: "開発・リリース",
		type: "請負開発",
		effort: "40人月",
		num: 40,
		bg: "bg-[#53B3F4]",
		arrowColor: "border-l-[#53B3F4]",
		tech: "C#",
		icon_bottom: true,
		bubbles: [
			{
				text: "請負に切替\nコスト削減！",
				bottom: "4.5rem",
				right: "6rem",
				direction: "bottomLeft"
			}
		],
	},
	{
		title: "運用・保守",
		type: "準委任開発",
		effort: "5人月",
		num: 5,
		bg: "bg-[#4799DD]",
		arrowColor: "border-l-[#4799DD]",
		bubbles: [
			{
				text: "人員減で\nコスト削減！",
				top: "-4rem",
				right: "4rem",
				direction: "topRight"
			}
		],
		icon_top: true
	},
	{
		title: "追加開発",
		type: "準委任開発",
		effort: "30人月",
		num: 30,
		bg: "bg-[#53B3F4]",
		arrowColor: "border-l-[#53B3F4]",
		tech: "Java Android",
		bubbles: [
			{
				text: "技術変更も\n自由自在！",
				top: "unset",
				right: "1.5rem",
				bottom: "9rem",
				direction: "topRight"
			},
		],
	},
];