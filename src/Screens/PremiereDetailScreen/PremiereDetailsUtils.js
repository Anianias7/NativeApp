const getCrewDataFromCredits = (credits) => {
    return credits.data[1]
};

const getCastDataFromCredits = (credits) => {
    return credits.data[0]
};

export const getCreditsData = (data) => {
    return ({
        cast: getCastDataFromCredits(data),
        crew: getCrewDataFromCredits(data)
    }
    )
}

export const getSelectedCastData = (cast) => {
    return cast.map(actor => getSelectedActorData(actor))
}

export const getSelectedActorData = (actor) => {
    return ({
        character: actor.character,
        name: actor.name,
        profilePath: actor.profile_path
    })
}

export const getSelectedCrewData = (crew) => {
    return crew.map(crewMan => getSelectedCrewManData(crewMan))
}

export const getSelectedCrewManData = (crewMan) => {
    return ({
        job: crewMan.job,
        name: crewMan.name,
        profilePath: crewMan.profile_path
    })
}

export const getCastUris = (cast) => {
    return cast.map(actor => ({
        image: {
            uri: `https://image.tmdb.org/t/p/w200${actor.profilePath}`
        }
    })
    )
}

export const getCastNames = (cast) => {
    return cast.map(actor => actor.name)
}

export const getCastCharacterNames = (cast) => {
    return cast.map(actor => actor.character)
}

export const getCrewUris = (crew) => {
    return crew.map(crewMan => ({
        image: {
            uri: `https://image.tmdb.org/t/p/w200${crewMan.profilePath}`
        }
    })
    )
}

export const getCrewNames = (crew) => {
    return crew.map(crewMan => crewMan.name)
}

export const getCrewJobTitles = (crew) => {
    return crew.map(crewMan => crewMan.job)
}

export const getSelectedBackdropData = (backdrop) => {
    return ({
        image: {
            uri: `https://image.tmdb.org/t/p/w200${backdrop.file_path}`
        }
    })
}


export const getSelectedBackdropsData = (backdrops) => {
    return backdrops.map(backdrop => getSelectedBackdropData(backdrop))
}