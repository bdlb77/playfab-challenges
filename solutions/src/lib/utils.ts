

interface IStatisticsMap {
  [key: string]: {
    started: string;
    completed: string;
  }
}

const statisticMap: IStatisticsMap = {
  Math: {
    started: "math_course",
    completed: "finished_math_course",
  },
  English: {
    started: "english_course",
    completed: "finished_english_course",
  },
  Geography: {
    started: "geography_course",
    completed: "finished_geography_course"
  }
}

export const getStatisticName = (courseTitle: string, isCourseCompleted: boolean): string => {
  let statisticName = "";
  statisticName = statisticMap[courseTitle][isCourseCompleted ? "completed" : "started"];
  return statisticName;
}
