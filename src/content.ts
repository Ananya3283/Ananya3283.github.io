// Every fact here comes from .claude/skills/my-profile/SKILL.md. Never add a metric that isn't there.

export const person = {
  name: "Ananya Rawat",
  role: "Data Analyst",
  email: "ananyaarawt@gmail.com",
  linkedin: "https://www.linkedin.com/in/ananyarawat-data/",
  github: "https://github.com/Ananya3283",
  resume: "/Ananya_Rawat_Resume.pdf",
};

export const stats = [
  { value: 502416, label: "online retail transactions cleaned and segmented with RFM" },
  { value: 150, suffix: "K", label: "ride bookings analyzed in Python and SQL" },
  { value: 52, prefix: "Rs. ", suffix: "M", label: "of ride revenue in one Power BI dashboard" },
  { value: 2.5, suffix: "x", label: "Instagram follower growth while at Ozonit" },
];

export const featured = {
  title: "HR attrition: why a blanket raise can't pay for itself",
  summary:
    "A story-style Power BI report on 1,470 employees: one dot per person, chart titles written in DAX that state the finding, and a what-if on whether a raise pays off.",
  live: "https://ananya3283.github.io/HR-Analytics-Dashboard/",
  repo: "https://github.com/Ananya3283/HR-Analytics-Dashboard",
  stack: ["Power BI", "DAX", "Power Query", "MySQL"],
  views: [
    { id: "who", label: "Who leaves", src: "/work/story-who.png" },
    { id: "why", label: "Why they leave", src: "/work/story-why.png" },
    { id: "cost", label: "What it costs", src: "/work/story-cost.png" },
  ],
  findings: [
    { value: "2.9x", text: "Staff on overtime leave 2.9x as often (30.5% vs 10.4%)." },
    { value: "43%", text: "of leavers quit within their first 2 years." },
    {
      value: "352",
      text: "departures a 10% raise would have to prevent to pay off. Only 237 people left, so retention spend should be targeted.",
    },
  ],
};

export const pipeline = {
  title: "Uber and Lyft trips, from raw files to a tested star schema",
  summary:
    "A monthly batch ELT pipeline on NYC TLC trip data. Airflow runs it in Docker; GitHub Actions tests every push.",
  repo: "https://github.com/Ananya3283/ride-sharing-elt",
  walkthrough: "https://github.com/Ananya3283/ride-sharing-elt/blob/main/docs/WALKTHROUGH.md",
  stack: ["Python", "PySpark", "S3", "PostgreSQL", "dbt", "Airflow", "Docker", "GitHub Actions"],
  stages: [
    { name: "Extract", text: "Monthly TLC Parquet into the lake's raw zone", tool: "Python, S3" },
    { name: "Transform", text: "Types, validation, de-duplication and a SHA-256 trip id", tool: "PySpark" },
    { name: "Load", text: "Each month swapped into Postgres in one transaction", tool: "Spark JDBC, Postgres" },
    { name: "Model", text: "Star schema and a daily company mart, guarded by data tests", tool: "dbt" },
  ],
  results: [
    { value: "2,083,221", text: "trips loaded from a real two-month run" },
    { value: "31 of 31", text: "dbt data tests passing" },
    { value: "~4 min", text: "per month, end to end, on a laptop" },
  ],
  note: "Idempotent by month: re-running any month never duplicates data.",
};

// live: the interactive web dashboard deployed from each repo's web/ folder.
export const projects: {
  title: string;
  result: string;
  stack: string;
  image: string;
  repo: string;
  notebook?: string;
  live?: string;
}[] = [
  {
    title: "Indian ride sharing analytics",
    result: "Showed that 38% of 150K bookings never completed and Auto drove 25% of revenue, by writing 30 SQL queries with CTEs and window functions.",
    stack: "Python, MySQL, Power BI",
    image: "/work/ride.png",
    repo: "https://github.com/Ananya3283/indian-ride-sharing-analytics",
    live: "https://ananya3283.github.io/indian-ride-sharing-analytics/",
    notebook: "https://nbviewer.org/github/Ananya3283/indian-ride-sharing-analytics/blob/main/python/ride_analytics.ipynb",
  },
  {
    title: "E-commerce customer segmentation",
    result: "Found that Champions, 21% of customers, bring in ~57% of GBP 9.80M revenue, by running RFM segmentation on 502,416 transactions.",
    stack: "Python, MySQL, Power BI",
    image: "/work/ecommerce.png",
    repo: "https://github.com/Ananya3283/ecommerce-customer-sales-analytics",
    live: "https://ananya3283.github.io/ecommerce-customer-sales-analytics/",
    notebook: "https://nbviewer.org/github/Ananya3283/ecommerce-customer-sales-analytics/blob/main/03_Customer_Analytics.ipynb",
  },
  {
    title: "Sales performance dashboard",
    result: "Showed sales, profit and margin by region, category and month, by building a Power BI dashboard with KPI cards and slicers.",
    stack: "Power BI, Excel",
    image: "/work/sales.png",
    repo: "https://github.com/Ananya3283/Sales-Performance-Dashboard",
    live: "https://ananya3283.github.io/Sales-Performance-Dashboard/",
  },
  {
    title: "Netflix catalogue EDA",
    result: "Mapped content growth, top genres, ratings and movies vs TV shows across 8,800+ titles, by running an EDA in Pandas.",
    stack: "Python, Pandas, Matplotlib",
    image: "/work/netflix.png",
    repo: "https://github.com/Ananya3283/Netflix-Data-Analysis",
    live: "https://ananya3283.github.io/Netflix-Data-Analysis/",
    notebook: "https://nbviewer.org/github/Ananya3283/Netflix-Data-Analysis/blob/main/Netflix_data_analysis.ipynb",
  },
  {
    title: "MovieLens SQL analysis",
    result: "Ranked the most-rated and top-rated movies (minimum 5 ratings) and genre performance, by joining movie and rating tables in SQL.",
    stack: "SQL, MySQL Workbench",
    image: "/work/movielens.png",
    repo: "https://github.com/Ananya3283/MovieLens-SQL-Analysis",
    live: "https://ananya3283.github.io/MovieLens-SQL-Analysis/",
  },
];

export const experience = {
  role: "Tech and Growth Lead (Early Hire)",
  company: "Ozonit",
  about: "D2C skincare startup, Delhi",
  dates: "Nov 2023 - Jul 2024",
  points: [
    { lead: "Automated reporting.", text: "Replaced manual monthly consolidation with one auto-refreshing report, by building Power Query pipelines that merge sales, inventory and order sheets." },
    { lead: "250+ orders a month.", text: "Informed founders' restock, pricing and promotion calls with product- and channel-level insight across 4 products, by running a monthly sales analysis." },
    { lead: "2,000+ units.", text: "Kept stock reconciled every month, by running inventory end to end: inward and outward logging and reorder levels." },
    { lead: "2.5x followers.", text: "Grew followers at 12% month over month, by leading growth across Instagram and offline channels and A/B testing creatives against sales." },
  ],
};

export const skills = [
  { group: "Analysis", items: ["Python", "SQL", "Pandas", "NumPy", "Statistics", "A/B testing", "EDA", "RFM segmentation"] },
  { group: "BI and visualization", items: ["Power BI", "DAX", "Power Query", "Tableau", "Excel", "Matplotlib", "Seaborn"] },
  { group: "Data and tools", items: ["MySQL", "PostgreSQL", "Jupyter", "Git", "GitHub", "Docker", "VS Code"] },
  { group: "Marketing analytics", items: ["Google Analytics", "Campaign A/B tests", "Instagram growth"] },
];

export const education = [
  { degree: "M.Sc. Data Science", dates: "2023 - 2025", grade: "CGPA 8" },
  { degree: "B.Sc. (Hons.) Mathematics", dates: "2020 - 2023", grade: "CGPA 7.5" },
];

export const certifications = [
  "Google Data Analytics (Coursera)",
  "SQL for Data Science (Coursera)",
  "Programming for Everybody: Python (Coursera)",
];
