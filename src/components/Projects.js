import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelectedProjectValue, useProjectsValue } from '../context';
import { IndividualProject } from './IndividualProject';

export const Projects = ({ activeValue = null }) => {
    const [active, setActive] = useState(activeValue);
    const { setSelectedProject } = useSelectedProjectValue();
    const { projects } = useProjectsValue();

    
    return (
        projects &&
        projects.map((project) => (
            
            <li
                key={project.projectID}
                data-testid="project-action-parent"
                data-doc-id={project.docID}
                className={
                    active === project.projectID
                        ? 'active sidebar__project'
                        : 'sidebar__project'
                }
            >
                <div
                    role="button"
                    data-testid="project-action"
                    tabIndex={0}
                    aria-label={`Select ${project.name} as the task project`}
                    onClick={() => {
                        setActive(project.projectID);
                        setSelectedProject(project.projectID);
                    }}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            setActive(project.projectID);
                            setSelectedProject(project.projectID);
                        }
                    }}
                >
                    <IndividualProject project={project} />
                    {/* {('Project', JSON.stringify(project))} */}
                </div>
            </li>
        ))
    );
};

Projects.propTypes = {
    activeValue: PropTypes.bool,
};