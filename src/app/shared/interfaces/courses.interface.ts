interface ICommonInfo {
    id: string;
    title: string;
    duration: number;
    status: string;
    previewImageLink: string;
    meta: IMetaPreview;
}

export interface ICourses extends ICommonInfo  {
            tags: string[];
            launchDate: string;
            description: string;
            rating: number;
            lessonsCount: number;
            containsLockedLessons: boolean;
}

export interface ICoursePreview extends ICourses {
    lessons: ILesson[];
}

export interface IMetaPreview {
    slug: string;
    skills: string[];
    courseVideoPreview?: ICourseVideoPreview;
}

export interface ICourseVideoPreview {
    link: string;
    duration: number;
    previewImageLink: string;
}

export interface ILesson extends ICommonInfo {
    order: number;
    type: string;
    link: string;
}

export interface ICoursesResponse {
    courses: ICourses[];
}

export type ICoursePreviewResponse = ICoursePreview