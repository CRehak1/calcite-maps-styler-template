﻿define(
     ({
        map: {
            error: "ไม่สามารถสร้างแผนที่ได้"
        },
        onlineStatus: {
            offline: "คุณกำลังทำงานแบบออฟไลน์ การส่งแบบฟอร์มจะถูกบันทึกไว้ที่เครื่องจนกว่าการเชื่อมต่อกับเซิร์ฟเวอร์จะสามารถทำได้",
            reconnecting: "กำลังเชื่อมต่อใหม่&hellip;",
            pending: "${total} อยู่ระหว่างดำเนินการแก้ไข จะถูกส่งไปเมื่อมีการเชื่อมต่อเครือข่าย"
        },
        configure: {
            mapdlg: {
                items: {
                    organizationLabel: "องค์กรของฉัน",
                    onlineLabel: "ArcGIS Online",
                    contentLabel: "เนื้อหาของฉัน",
                    favoritesLabel: "รายการโปรดของฉัน"
                },
                title: "เลือกเว็บแมพ",
                searchTitle: "ค้นหา",
                ok: "ตกลง",
                cancel: "ยกเลิก",
                placeholder: "ใส่เงื่อนไขการค้นหา"
            },
            groupdlg: {
                items: {
                    organizationLabel: "องค์กรของฉัน",
                    onlineLabel: "ArcGIS Online",
                    contentLabel: "เนื้อหาของฉัน",
                    favoritesLabel: "รายการโปรดของฉัน"
                },
                title: "เลือกกลุ่ม",
                searchTitle: "ค้นหา",
                ok: "ตกลง",
                cancel: "ยกเลิก",
                placeholder: "ใส่เงื่อนไขการค้นหา"
            },
            sharedlg: {
                items: {
                },
                mailtoLinkDescription: "นี่คือลิงค์ไปสู่ GeoForm"
            }
        },
        user: {
            mgrs: "MRGS",
            usng: "USNG",
            utm: "UTM",
            utm_northing: "ทิศเหนือ",
            utm_easting: "ทิศตะวันออก",
            utm_zone_number: "เลขประจำโซน",
            selectLayerTabText: "ก้_${formSection} Choose Form_ษฺ",
            geoFormGeneralTabText: "ก้_${formSection} Enter Information_ษฺ",
            locationInformationText: "ก้_${formSection} Select Location_ษฺ",
            submitInformationText: "ก้_${formSection} Complete Form_ษฺ",
            submitInstructions: "เพิ่มข้อมูล",
            myLocationText: "ตำแหน่งปัจจุบัน",
            locationDescriptionForMoreThanOneOption: "ระบุสถานที่สำหรับรายการนี้โดยคลิกหรือแตะบนแผนที่ หรือโดยใช้หนึ่งในตัวเลือกต่อไป",
            locationDescriptionForOneOption: "กำหนดที่ตั้งในการใส่ค่าโดยคลิก/เท็ป แผนที่ หรือโดยใช้ตามตัวเลือกที่กำหนดให้",
            locationDescriptionForNoOption: "กำหนดที่ตั้งในการใส่ค่าโดยคลิก/เท็ป แผนที่",
            addressText: "ค้นหา",
            geographic: "ละ/ลอง",
            locationTabText: "ตำแหน่ง",
            locationPopupTitle: "ตำแหน่ง",
            submitButtonText: "ส่ง",
            submitButtonTextLoading: "กำลังส่ง;",
            formValidationMessageAlertText: "ต้องการฟิลด์ดังกล่าว:",
            selectLocation: "กรุณาเลือก ${openLink}ที่ตั้ง${closeLink} เพื่อส่งของคุณ",
            emptylatitudeAlertMessage: "กรุณากรอก ${openLink}ละติจูด${closeLink} พิกัด",
            emptylongitudeAlertMessage: "กรุณากรอก ${openLink}ลองจิจูด${closeLink} พิกัด",
            shareUserTitleMessage: "ขอบคุณสำหรับความเอื้อเฟื้อ!",
            entrySubmitted: "รายการของคุณได้รับการส่งไปยังแผนที่",
            shareThisForm: "แบ่งปันฟอร์มนี้",
            shareUserTextMessage: "บอกคนอื่น ๆ ที่จะนำไปใช้ตัวเลือกดังต่อไปนี้",
            addAttachmentFailedMessage: "ไม่สามารถเพิ่มไฟล์แนบไปยังชั้นข้อมูลได้",
            addFeatureFailedMessage: "ไม่สามารถเพิ่มฟีเจอร์ไปยังชั้นข้อมูลได้",
            noLayerConfiguredMessage: "ขออภัย! ไม่พบข้อมูลใดๆ ในกรณีที่ต้องการเก็บแบบฟอร์มการตอบรับ แก้ไข GeoForm และเลือกฟีเจอร์เซอร์วิสที่สามารถแก้ไขได้เพื่อนำไปใช้",
            placeholderLatitude: "ละติจูด (Y)",
            placeholderLongitude: "ลองจิจูด (X)",
            latitude: "ละติจูด",
            longitude: "ลองจิจูด",
            findMyLocation: "นำทางฉัน",
            finding: "หาตำแหน่ง;",
            backToTop: "กลับสู่ด้านบน",
            addressSearchText: "การส่งข้อมูลของคุณจะแสดงขึ้นที่นี่ คุณสามารถลากหมุดไปยังตำแหน่งที่ถูกต้อง",
            shareModalFormText: "แบบฟอร์มลิงก์",
            close: "ปิด",
            locationNotFound: "ไม่พบตำแหน่ง",
            setLocation: "กำหนดการนำทาง",
            find: "ค้นหาที่อยู่หรือสถานที่",
            attachment: "สิ่งที่แนบมา",
            toggleDropdown: "สลับแบบเลื่อนลง",
            invalidString: "กรุณาใส่ค่าที่ถูกต้อง",
            invalidSmallNumber: "กรุณาใส่ค่าที่ถูกต้อง ${openStrong}จำนวนเต็ม${closeStrong} ค่าระหว่าง -32768 และ 32767",
            invalidNumber: "กรุณาใส่ค่าที่ถูกต้อง ${openStrong}จำนวนเต็ม${closeStrong} ค่าระหว่าง -2147483648 และ 2147483647",
            invalidFloat: "กรุณาใส่ค่าที่ถูกต้อง ${openStrong}จุดลอย${closeStrong}",
            invalidDouble: "กรุณาใส่ค่าที่ถูกต้อง ${openStrong}ทวีคูณ${closeStrong}",
            invalidLatLong: "กรุณาใส่ค่าที่ถูกต้อง ${latLink}ละติจูด${closeLink} และ ${lngLink}ลองจิจูด${closeLink} พิกัด",
            invalidUTM: "กรุณาใส่ค่าพิกัด UTM ที่ถูกต้อง",
            invalidUSNG: "กรุณาใส่ค่าพิกัด USNG ที่ถูกต้อง",
            invalidMGRS: "กรุณาใส่ค่าพิกัด MGRS ที่ถูกต้อง",
            geoformTitleText: "จีโอฟอร์ม",
            domainDefaultText: "เลือก;",
            applyEditsFailedMessage: "ขออภัยไม่สามารถส่งข้อมูลที่คุณกรอก กรุณาลองใหม่อีกครั้ง",
            requiredFields: "มีข้อผิดพลาดบางประการ กรุณาแก้ไขด้านล่าง",
            requiredField: "(ต้องการ)",
            error: "ข้อผิดพลาด",
            textRangeHintMessage: "${openStrong}บอกใบ้:${closeStrong} ค่าน้อยที่สุด ${minValue} และค่ามากที่สุด ${maxValue}",
            dateRangeHintMessage: "${openStrong}Hint:${closeStrong} จำนวนวันน้อยที่สุด ${minValue} และจำนวนวันมากที่สุด ${maxValue}",
            remainingCharactersHintMessage: "${value} ตัวอักษรที่เหลืออยู่",
            mapFullScreen: "ก้_Full Screen_ษฺ",
            mapRestore: "ก้_Restore_ษฺ",
            filterSelectEmptyText: "ก้_Select_ษฺ",
            invalidLayerMessage: "ก้_Form layer does not exist. Please configure the application and set the layer_ษฺ."
        },
        builder: {
            invalidUser: "ขอโทษ คุณไม่ได้รับอนุญาตให้เรียกดูรายการนี้",
            invalidWebmapSelectionAlert: "เว็บแมพที่เลือกไว้ไม่มีชั้นข้อมูลที่สามารถนำไปใช้งานได้ โปรดเพิ่มชั้นข้อมูลฟีเจอร์ที่สามารถแก้ไขได้ไปยังเว็บแมพของคุณ เพื่อดำเนินการต่อ",
            invalidWebmapSelectionAlert2: "หากต้องการข้อมูลเพิ่มเติม กรุณาอ้างอิงถึง ${openLink}ฟีเจอร์เซอร์วิสคืออะไร?${closeLink}",
            selectFieldsText: "เลือกแบบฟอร์มของฟิลด์",
            selectThemeText: "เลือกรูปแบบฟอร์ม",
            webmapText: "เว็บแมพ",
            layerText: "ชั้นข้อมูล",
            detailsText: "รายละเอียด",
            fieldsText: "ฟิลด์",
            styleText: "สไตล์",
            optionText: "ตัวเลือก",
            previewText: "ตัวอย่าง",
            publishText: "เผยแพร่",
            optionsApplicationText: "ตัวเลือก",
            titleText: "ตัวสร้าง",
            descriptionText: "GeoForm เป็นแม่แบบที่กำหนดสำหรับการแก้ไขข้อมูลในแบบฟอร์มที่ใช้ในการบริการ ${ link1} คุณสมบัติ ${closeLink} โปรแกรมนี้ช่วยให้ผู้ใช้สามารถป้อนข้อมูลผ่านทางแบบฟอร์มแทนแผนที่ของป๊อปอัพในขณะที่ใช้ประโยชน์จากพลังของ $ { Link2} เว็บแผนที่ $ {closeLink} และบริการคุณสมบัติที่สามารถแก้ไขได้ ใช้ขั้นตอนต่อไปนี้เพื่อปรับแต่งและปรับใช้ GeoForm ของคุณ",
            btnPreviousText: "ก่อนหน้า",
            btnNextText: "ถัดไป",
            webmapTabTitleText: "เลือกเว็บแม็พ",
            viewWebmap: "เรียกดูเว็บแม็พ",
            webmapDetailsText: "เว็บแมพที่ถูกเลือกคือ ${webMapTitleLink}${webMapTitle}${closeLink} เพื่อเลือกเว็บแมพที่แตกต่าง  กรุณาคลิกที่ปุ่ม 'เลือกเว็บแมพ'",
            btnSelectWebmapText: "เลือกเว็บแม็พ",
            btnSelectWebmapTextLoading: "โหลด&เฮลลิป;",
            layerTabTitleText: "เลือกชั้นข้อมูลที่แก้ไขได้",
            selectLayerLabelText: "ชั้นข้อมูล",
            selectLayerDefaultOptionText: "เลือกชั้นข้อมูล",
            defaultBasemap: "ก้_Default Basemap_ษฺ",
            secondaryBasemap: "ก้_Secondary Basemap_ษฺ",
            detailsTabTitleText: "แบบฟอร์มรายละเอียด",
            detailTitleLabelText: "ชื่อ",
            detailLogoLabelText: "รูปโลโก้",
            descriptionLabelText: "คำแนะนำรูปแบบ และรายละเอียด",
            fieldDescriptionLabelText: "ตัวอักษร (ตัวเลือก)",
            fieldTabFieldHeaderText: "คอลัมน์",
            fieldTabLabelHeaderText: "ตัวอักษร",
            fieldTabDisplayTypeHeaderText: "แสดงเป็น",
            fieldTabOrderColumnText: "ลำดับ",
            fieldTabVisibleColumnText: "ใช้ได้",
            selectMenuOption: "เลือกเมนู",
            selectRadioOption: "ปุ่ม",
            selectTextOption: "ข้อความ",
            selectDateOption: "เลือกวัน",
            selectRangeOption: "สัมผัส",
            selectCheckboxOption: "ช่อง",
            selectMailOption: "อีเมล์",
            selectUrlOption: "URL",
            selectTextAreaOption: "พื้นที่ตัวอักษร",
            previewApplicationText: "ดูตัวอย่างแอพพลิเคชั่น",
            saveApplicationText: "บันทึกแอพพลิเคชั่น",
            saveText: "จัดเก็บ",
            toggleNavigationText: "เปลี่ยนการนำทาง",
            formPlaceholderText: "แบบฟอร์มของฉัน",
            shareBuilderInProgressTitleMessage: "กำลังเผยแพร่ GeoForm",
            shareBuilderProgressBarMessage: "กรุณารอ&เฮลลิป;",
            shareBuilderTitleMessage: "สำเร็จ! รายการถูกจัดเก็",
            shareBuilderTextMessage: "คุณสามารถเริ่มเก็บรวบรวมข้อมูลโดยการแชร์ร่วมกับผู้อื่น",
            shareModalFormText: "แบบฟอร์มลิงก์",
            shareBuilderSuccess: "GeoForm ของคุณได้อัพเดทและเผยแพร่แล้ว!",
            geoformTitleText: "Geo Form",
            layerTabText: "นี่คือชั้นข้อมูลที่จะนำไปสร้างเป็น GeoForm ชั้นข้อมูลจะต้องเป็นฟีเจอร์เซอร์วิสที่สามารถแก้ไขได้ พร้อมกับเปิดสิทธิ์การแชร์ให้กับทุกคนเรียบร้อยแล้ว",
            detailsTabText: "ใช้กล่องรายละเอียดแบบฟอร์มด้านล่างเพื่อปรับแต่งเพิ่มโลโก้ที่กำหนดเองและให้คำอธิบายสั้น ๆ สำหรับผู้ชม GeoForm ของคุณ ในรายละเอียดที่คุณสามารถเพิ่มการเชื่อมโยงไปยังแหล่งข้อมูลอื่น ๆ ที่ข้อมูลการติดต่อและยังชี้ให้ผู้ชมของคุณไปยังโปรแกรมแผนที่เว็บที่มีข้อมูลทั้งหมดที่เก็บรวบรวมกับ GeoForm",
            fieldsTabText: "คุณสามารถเลือกได้ว่าฟิลด์ที่จะปรากฏให้ผู้ชม ข้อมูล GeoForm ของคุณแก้ไขตัวอักษรที่พวกเขาจะเห็นและเพิ่มคำอธิบายสั้น ๆ เพื่อช่วยในการป้อนข้อมูล",
            styleTabText: "ปรับแต่งรูปแบบ GeoForm ของคุณ โดยใช้ธีมเหล่านี้ตามความชอบของคุณ",
            publishTabText: "หากคุณปรับแต่ง GeoForm ของคุณเสร็จ บันทึกการสมัครและเริ่มต้นการใช้งานร่วมกันกับผู้ชมของคุณ คุณสามารถกลับไปสร้างและดำเนินการในการปรับแต่งตามความคิดเห็นที่ได้รับ",
            headerSizeLabel:"ขนาดส่วนหัว",
            smallHeader: "ใช้ส่วนบนขนาดเล็ก",
            bigHeader: "ใช้ขนาดส่วนหัวใหญ่ขึ้น",
            pushpinText: "หมุด",
            doneButtonText: "เรียกรายการดูแอปพลิเคชั่น",
            fieldTabPlaceHolderHeaderText: "คำใบ้ (ตัวเลือก)",
            enableAttachmentLabelText: "${openStrong}เอกสารแนบที่ใช้งานได้${closeStrong}",
            enableAttachmentLabelHint: "คุณสามารถกำหนดใช้งานได้/ใช้งานไม่ได้กับเอกสารแนบที่นี่",
            attachmentIsRequiredLabelText: "${openStrong}ต้องการเอกสารแนบ${closeStrong}",
            attachmentIsRequiredLabelHint: "หากจำเป็น ผู้ใช้งานสามารถร้องขอเอกสารแนบ",
            attachmentLabelText: "เอกสารแนบ",
            attachmentLabelHint: "บอกผู้ใช้งานถึงประเภทของไฟล์แนบ",
            attachmentDescription: "รายละเอียดของไฟล์แนบ",
            attachmentHint: "หากจำเป็น คุณควรเตรียมไฟล์แนบของการใช้งานเพิ่มเติม",
            jumbotronDescription: "Bootstrap Jumbotron ทำให้ง่ายต่อการกำหนดวัตถุประสงค์ของการใช้งานของคุณ นี้สามารถใช้งานได้ตลอดเวลา",
            shareGeoformText: "แบ่งปัน Geoform",
            shareDescription: "ร่วมกันทำให้มันง่ายสำหรับผู้ชมของคุณเพื่อแบ่งปัน GeoForm กับผู้ร่วมงานคนอื่น ๆ เมื่อพวกเขาได้ทำส่ง - สามารถใช้งานได้ตลอดเวลา",
            defaultMapExtent: "ขอบเขตแผนที่ตั้งต้น",
            defaultMapExtentDescription: "แผนที่จะตั้งค่าในระดับเริ่มต้นในแผนที่เว็บของคุณหลังจากส่ง - สามารถใช้งานได้ตลอดเวลา",
            pushpinOptionsDescription: "เลือกจากความหลากหลายของสีสำหรับหมุดแผนที่ก็ควรจะแตกต่างจากสัญลักษณ์แผนที่เพื่อช่วยให้ผู้ใช้งานนำส่งของพวกเขาบนแผนที่",
            selectLocationText: "เลือกตำแหน่งโดย",
            myLocationText: "ตำแหน่งของชั้น",
            searchText: "ค้นหา",
            coordinatesText: "พิกัดละติจูดและลองจิจูด",
            usng: "พิกัด USNG",
            mgrs: "พิกัด MGRS",
            utm: "พิกัด UTM",
            selectLocationSDescription: "อนุญาตให้ผู้ใช้งานเลือกตำแหน่งโดยใช้วิธีการนี้",
            dragTooltipText:"ลากฟิลด์ที่คุณต้องการให้ปรากฎ",
            showHideLayerText: "ก้_Show Layer_ษฺ",
            showHideLayerHelpText: "คุณสามารถปรับ GeoForm เพื่อแสดง/ซ่อนชั้นข้อมูล",
            labelHelpMessage: "ก้_Label_ษฺ",
            placeHolderHintMessage: "ก้_Hint Text_ษฺ",
            placeHolderHelpMessage: "ก้_Help Text_ษฺ",
            selectTextOptionValue: "ก้_Filter Select_ษฺ",
            disableLogo: "ก้_Disable Logo_ษฺ",
            disableLogoDescription: "ก้_You can configure the GeoForm to Show/Hide Logo in the form header_ษฺ",
            locateOnLoadText: "ก้_Locate On Load_ษฺ",
            locateOnLoadDescription: "ก้_You can configure the GeoForm to locate the current location on form load_ษฺ"
        }
    })
);