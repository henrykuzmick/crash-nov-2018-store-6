import * as testkit from 'wix-bootstrap-testkit';
import * as configEmitter from 'wix-config-emitter';

export const emitConfigs = ({ targetFolder, staticsUrl }) => {
  const emitter = configEmitter({
    sourceFolders: ['./templates'],
    targetFolder,
  });

  return emitter
    .fn('scripts_domain', 'static.parastorage.com')
    .fn('static_url', 'com.wixpress.crash-nov-2018-store-6', staticsUrl)
    .emit();
};

export const bootstrapServer = ({ port, managementPort, appConfDir }) => {
  return testkit.app('./index', {
    env: {
      PORT: port,
      MANAGEMENT_PORT: managementPort,
      NEW_RELIC_LOG_LEVEL: 'warn',
      APP_CONF_DIR: appConfDir,
      DEBUG: '',
    },
  });
};
