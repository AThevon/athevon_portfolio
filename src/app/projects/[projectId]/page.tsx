"use client";

import { PageWrapper } from '@/components/PageWrapper';
import styles from './project.module.scss';
import { useParams } from 'next/navigation';

const Project = () => {
   const { projectId } = useParams();
   console.log(projectId);
   return (
      <PageWrapper>
      <div className={styles.project}>
         <h1>Project nb {projectId}</h1>
      </div>
      </PageWrapper>
   );
}

export default Project;