"use client";
import {
 ScheduleComponent,
   ViewsDirective, ViewDirective,
   Day, Week, WorkWeek, Month, Agenda,
    EventSettingsModel, Inject
} from '@syncfusion/ej2-react-schedule';
import { timelineResourceData } from './data/SchaduleData'
import { registerLicense } from '@syncfusion/ej2-base';
registerLicense('Ngo9BigBOggjHTQxAR8/V1NCaF1cWWhAYVFpR2Nbe052flZGalxWVAciSV9jS3pTfkVgWXldcHRdT2FfVQ==');

export default function Home() {

  const eventSettings: EventSettingsModel = { dataSource: timelineResourceData }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
   <ScheduleComponent
    width='100%'
     height='550px'
      currentView='Wee' 
      selectedDate={new Date(2024, 7, 3)}
      enableAdaptiveUI={true} 
       eventSettings={eventSettings}>
        {/* <ViewsDirective>
          <ViewDirective option='Day' />
          <ViewDirective option='Week' />
          <ViewDirective option='Month' />
        </ViewsDirective> */}
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent> 
    </main>
  );
}
