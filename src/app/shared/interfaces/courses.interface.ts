interface ICommonInfo {
    id: string;
    title: string;
    duration: number;
    status: string;
    previewImageLink: string;
    meta: IMetaPreview;
}

export interface ICoursesPreview extends ICommonInfo  {
            tags: string[];
            launchDate: string;
            description: string;
            rating: number;
            lessonsCount: number;
            containsLockedLessons: boolean;
}

export interface ICoursePreview {
    lessons: ILesson[];
}

export interface IMetaPreview {
    slug: string;
    skills: string[];
    courseVideoPreview: ICourseVideoPreview;
}

export interface ICourseVideoPreview {
    link: string;
    duration: number;
    previewImageLink: string;
}

interface ILesson extends ICommonInfo {
    order: number;
    type: string;
    link: string;
}

export interface IPreviewCoursesResponse {
    courses: ICoursesPreview[];
}

export interface ITokenResponse {
    token: string;
}