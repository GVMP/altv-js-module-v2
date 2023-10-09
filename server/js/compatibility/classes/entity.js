/// <reference path="../../../../types/shared/index.d.ts" />
/// <reference path="../../../../types/server/index.d.ts" />
// import * as alt from "@altv/server";

export class Entity {
    setSyncedMeta(key, value) {
        if (typeof key == "object") {
            this.setMultipleSyncedMetaData(key);
            return;
        }

        this.syncedMeta[key] = value;
    }

    deleteSyncedMeta(key) {
        delete this.syncedMeta[key];
    }

    setStreamSyncedMeta(key, value) {
        if (typeof key == "object") {
            this.setMultipleStreamSyncedMetaData(key);
            return;
        }

        this.streamSyncedMeta[key] = value;
    }

    deleteStreamSyncedMeta(key) {
        delete this.streamSyncedMeta[key];
    }

    getStreamSyncedMeta(key) {
        return this.streamSyncedMeta[key];
    }

    hasStreamSyncedMeta(key) {
        return key in this.streamSyncedMeta;
    }
}

// NOTE (xLuxy): Do NOT export the Entity class from above, otherwise it will break instanceof
cppBindings.registerCompatibilityExport("Entity", alt.Entity);
