import { Module } from "../../types";

export const dataScienceModule: Module = {
  id: "ds-1",
  title: "Data Science & Analytics",
  subjectId: "data_science",
  courses: [
    {
      id: "pandas-basics",
      title: "Data Cleaning with Pandas",
      description: "Prepare your data for analysis.",
      lessons: [
        {
          id: "df-manipulation",
          title: "DataFrame Manipulation",
          type: "coding",
          content: "Learn how to filter and transform data using Pandas.",
          codeSnippet: "import pandas as pd\ndf = pd.read_csv('data.csv')\nclean_df = df.dropna().query('age > 20')",
          language: "python",
        },
        {
          id: "eda-viz",
          title: "Exploratory Data Analysis",
          type: "visualization",
          content: "Visualize data distributions and correlations.",
          visualizationId: "eda-plot-viz"
        }
      ]
    }
  ],
};
