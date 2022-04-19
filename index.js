import { datadogRum } from '@datadog/browser-rum';
    
datadogRum.init({
    applicationId: '08727c36-e3fb-4cd6-aa32-175874227bdd',
    clientToken: 'pub31af7b9c05b7217e8cc0b717ae216812',
    site: 'datadoghq.com',
    service:'test',
    // Specify a version number to identify the deployed version of your application in Datadog 
    // version: '1.0.0',
    sampleRate: 100,
    trackInteractions: true,
    defaultPrivacyLevel: 'mask-user-input'
});
    
datadogRum.startSessionReplayRecording();
