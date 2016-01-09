define({
	root: ({
		header: {
			start: "start",
			searchStories: "Search your stories...",
			filter: "Filter",
			sort: "Sort",
			sortColon: "Sort:",
			numResults: "Results: {{NUM_RESULTS}}",
			sortBy: "Sort by",
			dateModified: "Date modified",
			title: "Title",
			type: "Type",
			views: "Views",
			errors: "Errors",
			filterBy: "Filter by",
			filterItems: "Filter Items",
			apps: "Apps",
			sharing: "Sharing",
			clearAll: "Clear all",
			clearSearch: "Clears the search",
			logOut: "Log Out",
			mainQuote: "Storytelling is the most powerful way to put ideas into the world today.",
			quoteSource: "Robert McKee",
			checkYourStories: "Check Stories",
			createStory: "Create Story",
			totalStories: "Total stories: {{NUM_STORIES}}",
			noIssues: "All good",
			userStories: "Stories of {{USER_NAME}}",
			headerDisabledTooltip: "Please wait while we work some magic...",
			notOnTouch: "Not available on touch devices",
		},
		deleteModal: {
			title: "Confirm Delete",
			warningText: "Are you sure you want to delete this story? You will not be able to recover it.",
			deleteText: "Delete",
			cancel: "Cancel"
		},
		loading: {
			loadingText: "Loading your stories..."
		},
		cantFindStories: {
			whereAreStories: "Not seeing your story?",
			notSeeExplanation: "My Stories will only list story maps hosted in ArcGIS Online created with the {{STORY_MAP_TOUR}}, {{JOURNAL}}, {{MAP_SERIES}} and {{SWIPE_SPYGLASS}} applications. See our {{FAQ}} for more information.",
			faq: "FAQ",
			followingStoriesToUpdate: "The following stories created with early versions of our applications need to be updated for them to be listed in My Stories:",
			gettingStories: "Searching for stories created with early versions of our applications that need to be updated...",
			title: "Title",
			typeOfStoryMap: "Type",
			lastModified: "Last modified",
			allUpToDate: "No stories created with early versions of our applications need to be updated.",
			updateAll: "Update All",
			errorScanningForStories: "There was an error searching your stories.",
			close: "Close",
			updates: "Updates",
			updatingNumberOfNumber: "Updating {{CURRENT_NUMBER}} of {{TOTAL}}",
			updatingNumberOfNumberAlt: "Updating {{CURRENT_NUMBER}} / {{TOTAL}}",
			updateSucceeded: "Update succeeded!",
			reloadingStories: "Reloading your stories...",
			errorUpdatingStories: "There was an error updating your stories.",
			partialUpdateMessage: "Stories updated successfully: {{NUM_UPDATED}}"
		},
		signIn: {
			signInTitle: "Sign in to Story Maps",
			signInTo: "Sign in with your existing ArcGIS Online account to:",
			explanationOne: "Create compelling story maps to tell your stories.",
			explanationTwo: "Use your maps and data from ArcGIS Online in your story maps.",
			explanationThree: "Manage your story maps and check the status of their content.",
			dontHaveAccount: "Don't have an ArcGIS Online account? Sign up for a:",
			publicAccount: "Free non-commercial public account",
			orgAccount: "Free trial ArcGIS subscription",
			timeExpired: "Your sign-in expired. Sign in again to pick up where you left off.",
			apiDidntLoad: "Something isn't loading correctly. Try refreshing the page.",
			needAccount: "Need an account?",
			letsGo: "Let's go!"
		},
		sharingLevel: {
			publicMessage: "Public",
			privateMessage: "Private",
			organization: "Organization",
			changedSharing: "Changed sharing level.",
			unableToChange: "Unable to change sharing.",
			partOfMap: "This item resides in a map. To change its sharing level, you must change the sharing level of the map.",
			storyPublicContentOrg: "Your story is public, so its content can't be shared only with your organization",
			storyPublicContentPrivate: "Your story is public, so its content can't be private",
			mapOrg: "Sharing your map to your organization would break your story",
			layerOrg: "Sharing your layer to your organization would break your story",
			mapPrivate: "Making your map private would break your story",
			layerPrivate: "Making your layer private would break your story"
		},
		collectionList: {
			advocacy: "Advocacy and Outreach",
			architecture: "Architecture and Design",
			conservation: "Conservation and Sustainability",
			culture: "Culture",
			destinations: "Destinations and Tourism",
			disasters: "Disasters and Recovery",
			economy: "Economy and Development",
			entertainment: "Entertainment",
			history: "History",
			infrastructure: "Infrastructure",
			marketing: "Marketing",
			nature: "Nature and Environment",
			news: "News and Events",
			oceans: "Oceans",
			parks: "Parks and Recreation",
			people: "People and Society",
			planning: "Planning and Analysis",
			publicArt: "Public Art",
			science: "Science and Technology",
			sport: "Sport",
			travelogues: "Travelogues"
		},
		types: {
			custom: "Custom",
			notSpecified: "Type not specified"
		},
		storyMap: {
			shared: "Shared",
			saveFailed: "Error saving",
			numViews: "Views: {{NUM_VIEWS}}",
			editStory: "Edit Story",
			viewLive: "View Live",
			preview: "Preview",
			deleteButton: "Delete",
			modified: "Modified {{DATE}}",
			summary: "Summary",
			loading: "Loading...",
			collapse: "collapse",
			close: "close",
			hide: "hide",
			notAvailableWhenBroken: "Your story has issues below",
			cantBeDeleted: "This story has delete protection enabled, see its item page on ArcGIS Online to disable",
			shareDialog: {
				title: "Share your story with the world!",
				notPublicWarning: "Your story is shared with your organization. Only members of your organization will be able to view it.",
				embedStory: "Embed your story",
				shortLink: "Shortlink",
				hideHeaderBar: "Hide header bar",
				copied: "Copied",
				small: "small",
				medium: "medium",
				large: "large",
				custom: "custom",
				widthAbbreviation: "w",
				heightAbbreviation: "h",
				emptyDimension: "Enter a dimension.",
				seeExample: "Preview your embed",
				removeHeader: "Hide application header"
			},
			maps: {
				unableRetrieveTitle: "Unable to retrieve maps",
				unableRetrieveDescription: "We weren't able to retrieve maps for this story map."
			},
			images: {
				unableRetrieveTitle: "Unable to retrieve images",
				unableRetrieveDescription: "We weren't able to retrieve images for this story map."
			},
			tags: {
				tags: "Tags",
				collectionTags: "Subject",
				selectASubject: "Select a subject",
				save: "Save",
				saved: "Saved",
				errorSaving: "Error saving",
				tagTip: "Tip: Tags help people find your story on ArcGIS Online. The more relevant the tags are, the higher the visibility your work will receive."
			},
			submitToGallery: {
				gallerySubmission: "Story Maps Gallery",
				canSubmitIf: "You can nominate your story to the gallery if it contains the following:",
				hasOwnImage: "Custom thumbnail",
				chosenSubject: "A subject and some tags",
				chosenSubjectAlt: "A {{SUBJECT}} and some tags",
				storyMapTopicSubject: "subject",
				sharedPublicly: "Shared publicly",
				noBrokenContent: "No issues",
				nominateToGallery: "Nominate to Gallery",
				comingSoon: "Coming soon!",
				submitted: "Submitted",
				errorSubmitting: "Error submitting",
				ourGallery: "The Story Maps gallery",
				galleryTip: "{{THE_GALLERY}} is a curated set of Story Maps that showcases some of the best examples. If your story is selected, it will be added within 10 days of your submission. Due to the quantity of nominations, we cannot promise that your story will be added."
			},
			placeholders: {
				noSummary: "No summary, click to add one."
			},
			errors: {
				cantDeleteStory: "Unable to delete story.",
				unableToFind: "Unable to find content",
				unableToRetrieve: "We weren't able to retrieve the content for this story map."
			},
			socialSharing: {
				availableWhenPublic: "This option will be available when your story is public"
			},
			dialog: {
				back: "Back",
				close: "Close",
				cancel: "Cancel"
			},
			imagePicker: {
				changeDefault: "Change the default image",
				changeImage: "Change thumbnail",
				uploadImage: "Upload thumbnail",
				chooseImage: "Choose thumbnail",
				chooseAnImage: "Choose an Image",
				notInIEVersion: "This feature is not available in Internet Explorer {{VERSION_NUMBER}}.",
				or: "Or",
				uploadAnImage: "Upload an Image",
				supportedFileTypes: "Supports .png, .jpg, .gif",
				imageSizeMessage: "Your image needs to be at least 286 px wide by 190 px tall.",
				minimumDimensions: "Minimum: 286 x 190px",
				imagesLoading: "Loading images...",
				noImages: "This story has no images",
				errorLoading: "Unable to retrieve the images in this story",
				clickBelowTip: "Click the button below to upload an image.",
				dragAndDrop: "Drag and Drop",
				cropImage: "Crop Image",
				saveImage: "Save Image",
				save: "Save",
				savingImage: "Saving your image...",
				saved: "Saved!",
				errorSaving: "Unable to save your image.",
				skipAndCrop: "Skip and Crop for me",
				wrongFormat: "This file type is not supported.",
				noCropWarning: "This image can't be cropped, but you can still save it as your story thumbnail with its original dimensions ({{WIDTH_PIXELS}} x {{HEIGHT_PIXELS}}px)."
			}
		},
		content: {
			media: {
				maps: "Maps",
				images: "Images",
				videos: "Videos",
				webpages: "Webpages",
				tags: "Tags",
				gallery: "Gallery"
			},
			headers: {
				status: "Status",
				source: "Source",
				name: "Name",
				shared: "Shared"
			},
			component: {
				mapTour: "Point Number",
				bullet: "Bullet",
				tab: "Tab",
				accordion: "Section",
				mapJournal: "Section"
			},
			titleType: {
				mapTour: "Caption",
				mapJournal: "URL",
				mapSeries: "URL"
			},
			actions: {
				viewMap: "View Map",
				editMap: "Edit Map",
				fix: "Fix",
				viewLayer: "View Layer"
			},
			contentType: {
				mainStage: "main stage action",
				sidePanel: "description"
			},
			notification: {
				refreshExplanation: "Check your story again",
				checking: "Checking...",
				foundSomeIssues: "We found some issues",
				noIssuesFound: "No issues found",
				storyPublic: "Your story is now public",
				storyOrg: "Your story is now shared to your organization",
				storyPrivate: "Your story is now private",
				mapPublic: "Your map is now public",
				mapOrg: "Your map is now shared to your organization",
				mapPrivate: "Your map is now private",
				layerPublic: "Your layer is now public",
				layerOrg: "Your layer is now shared to your organization",
				layerPrivate: "Your layer is now private",
				contentPublic: "Your content is now public",
				contentOrg: "Your content is now shared to your organization",
				contentPrivate: "Your content is now private",
				storyAndContentPublic: "Your story and its content are now public",
				storyAndContentOrg: "Your story and its content are now shared to your organization",
				storyAndContentPrivate: "Your story and its content are now private",
				shareBulkPrompt: "Do you want to share your story’s content accordingly?",
				layersPublic: "Some layers have also been shared publicly",
				layersOrg: "Some layers have also been shared with your organization",
				layersPrivate: "Some layers have also been made private",
				mapsPublic: "Some maps have also been shared publicly",
				mapsOrg: "Some maps have also been shared with your organization",
				mapsPrivate: "Some maps have also been made private",
				layersAndMapsPublic: "Some maps and layers have also been shared publicly",
				layersAndMapsOrg: "Some maps and layers have also been shared with your organization",
				layersAndMapsPrivate: "Some maps and layers have also been made private",
				yes: "Yes",
				no: "No",
				premiumPublicSuccess: "Your premium content is now publicly accessible",
				subscriptionPublicSuccess: "Your subscription content is now publicly accessible"
			},
			errors: {
				publicDisabled: "Sharing publicly has been disabled by the Administrator",
				noMapName: "Could Not Retrieve Map Name",
				notPublic: "NOT PUBLIC",
				inaccessible: "INACCESSIBLE",
				deleted: "DELETED",
				cantAccessVideo: "Could Not Access Video",
				noStoriesFound: "We could not find any Story Maps in your content.",
				cantShowStories: "Unable to show your story maps. Please try again later.",
				consolationSearch: "We couldn't find any stories.",
				notCompatibleWithBrowser : "My Stories is not supported in Internet Explorer before version {{VERSION_NUMBER}}.",
				pleaseUpdateBrowser: "Please update your browser.",
				searchTip: "Try and simplify it a bit.",
				consolationNoStories: "Welcome to My Stories!",
				noStoriesTip: "To make your first story map, check out the Apps page.",
				letsGo: "Let's Go",
				cantChangeSharingLevel: "Unable to change sharing level",
				cantChangeSharingLevels: "Unable to change sharing levels",
				errorUpdatingTitle: "Error updating title",
				errorUpdatingSummary: "Error updating summary",
				noEmptyTitle: "Title cannot be empty",
				cantUpdatePremiumContent: "Unable to update premium content",
				cantUpdateSubscriptionContent: "Unable to update subscription content",
				createFirstStory: "Create My First Story"
			},
			tooltipErrors: {
				mapHasBeenDeleted: "Map has been deleted",
				layerHasBeenDeleted: "Layer has been deleted",
				mapIsInaccessible: "Map is inaccessible",
				layerIsInaccessible: "Layer is inaccessible",
				mapNotYoursNotAccessible: "Map is owned by someone else and isn't accessible",
				layerServiceOkItemNot: "Layer was added as an item that is deleted or inaccessible",
				layerNotYoursNotAccessible: "Layer is owned by someone else and isn't accessible",
				mapOthersSharedBelowLevel: "Map is not owned by you and is not public",
				layerOthersSharedBelowLevel: "Layer is not owned by you and is not public",
				noMapNoDetails: "Without the map details, we can't tell you anything about the layers",
				mapIsPrivate: "Map is private",
				mapIsOrg: "Map is only shared in your organization",
				layerIsPrivate: "Layer is private",
				layerIsOrg: "Layer is only shared in your organization",
				imageInaccessible: "This image is inaccessible",
				videoInaccessible: "This video is inaccessible",
				webpageInaccessible: "This web page is inaccessible",
				layerSecureService: "Layer is a secure service",
				mapSecureService: "Map is a secure service",
				layerConsumesCredits: "Layer is premium content and consumes credits",
				layerSubscriptionContent: "Layer is subscription content",
				mapConsumesCredits: "Map is premium content and consumes credits",
				mapSubscriptionContent: "Map is subscription content"
			},
			tooltipWarnings: {
				cantScanThisTypeAlt: "We're not able to check this type of layer",
				cantScanThisType: "Layer is not a type of layer we can check",
				webpageNotScanned: "Webpages are not checked for issues"
			},
			scanningErrors: {
				deletedMap: "Deleted content",
				inaccessibleMap: "Inaccessible map content",
				notYoursNotAccessible: "Content not owned by you and not public",
				serviceOkItemNot: "Working layers but inaccessible items",
				someContentNotPublic: "Content not shared publicly",
				someContentPrivate: "Private content",
				othersSharedBelowLevel: "Content not owned by you and not public",
				premiumContent: "Premium content",
				subscriptionContent: "Subscription content",
				secureService: "Secure services",
				inaccessibleImage: "Inaccessible images",
				inaccessibleVideo: "Inaccessible videos",
				inaccessibleWebpage: "Inaccessible webpages"
			},
			scanningErrorTips: {
				deletedMapTip: "Tip: Edit your web map and remove the broken content, or remove the web map from your story.",
				inaccessibleMapTip: "Tip: Edit your web map and remove the broken content, or remove the web map from your story.",
				notYoursNotAccessibleTip: "Tip: Edit your web map and remove the layer, or remove the web map from your story.",
				serviceOkItemNotTip: "Layers were added as items that are inaccessible or deleted. The layers are working, but this may affect your map (popups, symbology).",
				ignore: "Ignore",
				fix: "Fix",
				clickToShareOrg: "Click the button to share all this content to your organization, or change each item manually by clicking its sharing buttons.",
				clickToSharePublic: "Click the button to share all this content publicly, or change each item manually by clicking its sharing buttons.",
				shareOrg: "Share to your org",
				sharePublicly: "Share publicly",
				othersSharedBelowLevelTip: "Tip: Some of your story's content is owned by {{USER_NAME}}, and others who view your story may not be able to see it.",
				secureServiceTip: "Tip: Remove the secure service from your story or follow the procedure described {{HERE}}.",
				blogArticle: "here",
				premiumContentTip: "Your story contains premium content that will consume {{CREDITS}} upon making it public. Make your story public and continue, or remove the layers from your story.",
				premiumContentPublicTip: "Your story contains premium content that will consume {{CREDITS}} when publicly available. Confirm to make these layers public or remove the layers from your story.",
				subscriptionContentTip: "Your story contains subscription content that is not publicly available by default. Confirm that you want to make these layers available (no credits will be consumed), or remove the layers from your story.",
				agolCredits: "ArcGIS Online credits",
				credits: "credits",
				makePublic: "Make public",
				confirm: "Confirm",
				inaccessibleImageTip: "Tip: Provide the missing image or remove the reference to it.",
				inaccessibleVideoTip: "Tip: Provide the missing video or remove the reference to it.",
				inaccessibleWebpageTip: "Tip: Provide the missing web page or remove the reference to it."
			},
			removeLayer: {
				title: "Fix Layer Issue",
				layersWithIssue: "Layers with this issue: {{NUM_WITH_ISSUE}}",
				issueExplanation: "The layer {{LAYER_NAME}} was added as an item that is inaccessible or deleted. The layer is working, but this may affect your map (popups, symbology). We cannot tell if the item was important to your story.",
				issueSolution: "To fix the issue, you can edit your map, remove the layer, and add the layer back to the map using the following URL:",
				editMap: "Edit Your Map",
				clickBelowWhenDone: "When you have finished editing, click the button below:",
				rescanAndClose: "Rescan And Close"
			},
			info: {
				ownedBy: "This item is owned by {{USER_NAME}}",
				unknownUser: "someone else",
				untitledSection: "(Untitled section)",
				introRecord: "Introduction"
			},
			layers: {
				layersHeader: "Layers",
				noLayers: "(No Layers)",
				basemapParens: "(basemap)"
			},
			images: {
				thumbnails: "Thumbnails",
				thumbnail: "Thumbnail",
				thumbnailParens: "(thumbnail)"
			},
			general: {
				noTitle: "(no title)",
				loading: "Loading..."
			}
		},
		infographics: {
			mapJournal: {
				firstTitle: "sections",
				secondTitle: "style",
				secondValueA: "side panel",
				secondValueB: "floating panel",
				thirdTitle: "maps"
			},
			mapTour: {
				firstTitle: "tour points",
				secondTitle: "style",
				secondValueA: "integrated",
				secondValueB: "three-panel",
				thirdTitle: "basemap",
				thirdValueLoading: "Loading...",
				thirdValueUnknown: "unknown"
			},
			mapSeries: {
				firstTitleA: "bullets",
				firstTitleB: "sections",
				firstTitleC: "tabs",
				secondTitle: "style",
				secondValueA: "bulleted",
				secondValueB: "side accordion",
				secondValueC: "tabbed",
				thirdTitle: "maps"
			},
			swipeSpyglass: {
				firstTitle: "points of interest",
				secondTitle: "style",
				secondValueA: "swipe",
				secondValueB: "spyglass",
				thirdTitle: "maps"
			}
		},
		progress: {
			checkingStories: "Checking your stories for issues...",
			stop: "Stop",
			exit: "Exit",
			dismiss: "Dismiss",
			done: "Done.",
			noStoriesWithIssuesLower: "No issues found!",
			storiesErrorFree: "Looks like your stories are error-free",
			scanAllError: "Unable to scan -- we couldn't retrieve one or more of your stories",
			scanProgress: "{{NUM_SCANNED}} of {{NUM_TOTAL}}",
			scanStopped: "Stories scanned: {{NUM_SCANNED}}, Stories with issues: {{ISSUE_STORIES}}",
			storiesWithIssues: "Stories with issues: {{NUM_STORIES}}"
		}
    }),
	"ar": 1,
	"cs": 1,
	"da": 1,
	"de": 1,
	"el": 1,
	"es": 1,
	"et": 1,
	"fi": 1,
	"fr": 1,
	"he": 1,
	"it": 1,
	"ja": 1,
	"ko": 1,
	"lt": 1,
	"lv": 1,
	"nl": 1,
	"nb": 1,
	"pl": 1,
	"pt-br": 1,
	"pt-pt": 1,
	"ro": 1,
	"ru": 1,
	"sv": 1,
	"th": 1,
	"tr": 1,
	"vi": 1,
	"zh-cn": 1,
	"zh-hk": 1,
	"zh-tw": 1
});
