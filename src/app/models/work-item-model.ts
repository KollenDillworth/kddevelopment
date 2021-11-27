export interface WorkItemModel {
    workItems: WorkItem[]
}

interface WorkItem{
    title: string;
    url: string;
    imgSrc: string;
}