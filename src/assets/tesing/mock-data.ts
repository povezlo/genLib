import { 
    ICourseVideoPreview,
    IMetaPreview,
    ICourses,
    ICoursePreview,
    ILesson,
    ICoursesResponse,
    ICommonInfo 
} from "src/app/shared"

export const courseVideoPreviewMockData: ICourseVideoPreview = {
    link: 'test link',
    duration: 123,
    previewImageLink: 'test link'
}

export const metaPreviewMockdata: IMetaPreview = {
    slug: 'test slug',
    skills: ['test skill'],
    courseVideoPreview: courseVideoPreviewMockData
}

export const commonData: ICommonInfo = {
    id: 'test id',
    title: 'test Title',
    duration: 123,
    status: 'test launched',
    previewImageLink: 'test link', 
    meta: metaPreviewMockdata,
}

export const coursesMockdata: ICourses = {
    ...commonData,
    tags: ['test tags'],
    launchDate: '2023',
    description: 'test description',
    rating: 2.5,
    lessonsCount: 2,
    containsLockedLessons: true
}

export const lessonMockData: ILesson = {
    ...commonData,
    order: 1,
    type: 'video',
    link: 'test link'
}

export const coursePreviewMockData: ICoursePreview = {
    ...coursesMockdata,
    lessons: [lessonMockData]
}

export const coursesResponseMockData: ICoursesResponse = {
    courses: [coursesMockdata]
}