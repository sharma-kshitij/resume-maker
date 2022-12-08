import { useState } from 'react';
import styles from './Editor.module.css'
import InputControl from './InputControl';


const Editor = ({ sections }) => {

    const [activeSectionKey, setActiveSectionKey] = useState(
        Object.keys(sections)[0]
    );

    const workExpBody = () => {
        return (
            <div className={styles.detail}>
                <div className={styles.row}>
                    <InputControl
                        label={"Title"}
                        placeholder={"Enter title eg. Frontend Developer"}
                    />
                    <InputControl
                        label={"Company Name"}
                        placeholder={"Enter Company Name"}
                    />
                </div>
                <div className={styles.row}>
                    <InputControl
                        label={"Certificate Link"}
                        placeholder={"Enter certificate Link"}
                    />
                    <InputControl
                        label={"Location"}
                        placeholder={"Enter Location"}
                    />
                </div>
                <div className={styles.row}>
                    <InputControl
                        label={"Start Date"}
                        type={"date"}
                        placeholder={"Enter start date of work"}
                    />
                    <InputControl
                        label={"End Date"}
                        type={"date"}
                        placeholder={"Enter end date of work"}
                    />
                </div>
                <div className={styles.column}>
                    <label>Enter Work Description</label>
                    <InputControl placeholder={"Line 1"} />
                    <InputControl placeholder={"Line 2"} />
                    <InputControl placeholder={"Line 3"} />
                </div>
            </div>
        )
    }

    const projectBody = () => {
        return (
            <div className={styles.detail}>
                <div className={styles.row}>
                    <InputControl label={"Title of the Project"} />
                </div>
                <InputControl label={"Overview"} placeholder={"Enter basic overview of the project"} />
                <div className={styles.row}>
                    <InputControl
                        label={"Deployed Link"}
                        placeholder={"Enter deployed link of the project"}
                    />
                    <InputControl
                        label={"Github Link"}
                        placeholder={"Enter Github link of the project"}
                    />
                </div>
                <div className={styles.column}>
                    <label>Enter Project Description</label>
                    <InputControl placeholder={"Line 1"} />
                    <InputControl placeholder={"Line 2"} />
                    <InputControl placeholder={"Line 3"} />
                    <InputControl placeholder={"Line 4"} />
                </div>
            </div>
        )
    }

    const educationBody = () => {
        return (
            <div className={styles.detail}>
                <div className={styles.row}>
                    <InputControl label={"Title"} placeholder={"Eg : B.Tech"} />
                </div>
                <InputControl label={"College/School Name"} />
                <div className={styles.row}>
                    <InputControl
                        label={"Start Date"}
                        type={"date"}
                    />
                    <InputControl
                        label={"End Date"}
                        type={"date"}
                    />
                </div>
            </div>
        )
    }

    const basicInfoBody = () => {
        return (
            <div className={styles.detail}>
                <div className={styles.row}>
                    <InputControl label={"Name"} />
                    <InputControl label={"Title"} placeholder={"Eg : Front End Developer"} />
                </div>
                <div className={styles.row}>
                    <InputControl
                        label={"LinkedIN Profile"}
                    />
                    <InputControl
                        label={"Github Profile"}
                    />
                </div>
                <div className={styles.row}>
                    <InputControl
                        label={"Email"}
                    />
                    <InputControl
                        label={"Phone"}
                    />
                </div>
            </div>
        )
    }

    const achievementsBody = () => {
        return (
            <div className={styles.detail}>
                <div className={styles.column}>
                    <label>List your achievements</label>
                    <InputControl placeholder={"Line 1"} />
                    <InputControl placeholder={"Line 2"} />
                    <InputControl placeholder={"Line 3"} />
                    <InputControl placeholder={"Line 4"} />
                </div>
            </div>
        )
    }

    const summaryBody = () => {
        return (
            <div className={styles.detail}>
                <InputControl label={"Summary"} />
            </div>
        )
    }

    const otherBody = () => {
        return (
            <div className={styles.detail}>
                <InputControl label={"Enter something else"} />
            </div>
        )
    }

    const generateBody = () => {
        switch (sections[activeSectionKey]) {
            case sections.basicInfo: return basicInfoBody();
            case sections.workExp: return workExpBody();
            case sections.project: return projectBody();
            case sections.education: return educationBody();
            case sections.achievement: return achievementsBody();
            case sections.summary: return summaryBody();
            case sections.other: return otherBody();
            default: return null;
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                {
                    Object.keys(sections)?.map(key => {
                        return (
                            <div
                                key={key}
                                className={`
                                ${styles.section} ${activeSectionKey == key ? styles.active : ""}
                                `}
                                onClick={() => setActiveSectionKey(key)}
                            >

                                {sections[key]}

                            </div>
                        )
                    })}
            </div>

            <div className={styles.body}>
                <InputControl
                    label="Title"
                    placeholder="Enter section title "
                />

                {generateBody()}
            </div>

        </div>
    )
}

export default Editor